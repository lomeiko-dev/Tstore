import { IQuizQuestion } from 'entities/quiz'
import { IResultQuiz, questionResult } from 'entities/result-quiz'
import { getValueCorrectAnswer } from '../lib/getValueCorrectAnswer.ts'

interface ICompareAnswersProps {
  questions: IQuizQuestion[]
  questionAnswers: questionResult[]
  nameTest: string
}

interface ICompareAnswersResult {
  result?: IResultQuiz
  error?: string
}

export const compareAnswers = (props: ICompareAnswersProps): ICompareAnswersResult => {
  const {
    questionAnswers,
    questions,
    nameTest
  } = props

  const result: IResultQuiz = {
    percent_passing: 0,
    value_correct_answer: 0,
    value_not_correct_answer: 0,
    scores: 0,
    id_user: '',
    nameTest: '',
    answers: [],
    questions: [] 
  }

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

  result.nameTest = nameTest
  result.answers = questionAnswers
  result.questions = questions

  return {
    result
  }
}
