import { ITestsStudents, NewTestsStudents } from './tests-students.model';

export const sampleWithRequiredData: ITestsStudents = {
  id: 17507,
};

export const sampleWithPartialData: ITestsStudents = {
  id: 11797,
};

export const sampleWithFullData: ITestsStudents = {
  id: 30084,
  result: 'along since',
};

export const sampleWithNewData: NewTestsStudents = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
