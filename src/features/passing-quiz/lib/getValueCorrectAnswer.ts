import { IQuizQuestion } from 'entities/quiz'

export const getValueCorrectAnswer = (questions: IQuizQuestion[]): number => {
  let result = 0

  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].answers.length; j++) {
      if (questions[i].answers[j].isCorrect) { result += 1 }
    }
  }

  return result
}
