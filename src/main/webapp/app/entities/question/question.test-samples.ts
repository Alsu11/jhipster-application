import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 4461,
};

export const sampleWithPartialData: IQuestion = {
  id: 29111,
  answers: 'joyfully',
  points: 'whoever incidentally consequently',
};

export const sampleWithFullData: IQuestion = {
  id: 13279,
  question: 'finally uh-huh',
  answers: 'gah except as',
  points: 'healthily ha ugh',
};

export const sampleWithNewData: NewQuestion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
