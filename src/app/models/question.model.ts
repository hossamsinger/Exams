// @ desc This in InterFace Glopaly For Question Style 
// ==================================================
export interface IQuestion {
    id: number;
    title: string;
    choises: string[];
    correctedAnswer: number;
    category: CategoryType;
  }
  
  export enum CategoryType {
    begineer = 1,
    intermediate = 2,
    advanced = 3,
    expert = 4
  }
  
