import { IQuizQuestion } from 'entities/quiz'
import { questionResult } from '../model/types/passing-quiz-scheme.ts'
import { IResultQuiz } from 'entities/result-quiz'
import { getValueCorrectAnswer } from '../lib/getValueCorrectAnswer.ts'

interface ICompareAnswersProps {
  questions: IQuizQuestion[]
  questionAnswers: questionResult[]
}

interface ICompareAnswersResult {
  result?: IResultQuiz
  error?: string
}

export const compareAnswers = (props: ICompareAnswersProps): ICompareAnswersResult => {
  const {
    questionAnswers,
    questions
  } = props

  const result: IResultQuiz =
        { percent_passing: 0, value_correct_answer: 0, value_not_correct_answer: 0, scores: 0, id_user: '' }

  const valueCorrectAnswer = getValueCorrectAnswer(questions)

  if (questions.length !== questionAnswers.length) {
    return {
      error: 'Сбой ответов'
    }
  }

  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].answers.length; j++) {
      if (questions[i].answers[j].isCorrect && questionAnswers[i].answers[j]) {
        result.value_correct_answer += 1
        result.scores += questions[i].answers[j].score
        result.percent_passing += 100 / valueCorrectAnswer
      } else if (!questions[i].answers[j].isCorrect && questionAnswers[i].answers[j]) {
        result.value_not_correct_answer += 1
      }
    }
  }

  return {
    result
  }
}
