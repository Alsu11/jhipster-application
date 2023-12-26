import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 24719,
};

export const sampleWithPartialData: IStudent = {
  id: 13690,
  lastName: 'Hane',
};

export const sampleWithFullData: IStudent = {
  id: 21203,
  firstName: 'Camille',
  lastName: 'Jerde',
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
