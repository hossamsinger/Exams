// @ desc This in InterFace Glopaly For Exam Style
// ==================================================

export interface IExam {
    id: number;
    title: string;
    questions: string[];
    answers: string[];
    result: number;
    category : CategoryType;
}
export enum CategoryType {
    begineer = 1,
    intermediate = 2,
    advanced = 3,
    expert = 4
  }
  
// ==================================================