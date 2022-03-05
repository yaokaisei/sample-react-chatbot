import type { Answers } from './answers';

export type DataSet = {
  [key:string]: {
    answers:Answers[],
    question:string
  }
}
