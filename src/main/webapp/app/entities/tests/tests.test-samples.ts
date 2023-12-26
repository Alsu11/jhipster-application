import { ITests, NewTests } from './tests.model';

export const sampleWithRequiredData: ITests = {
  id: 3094,
};

export const sampleWithPartialData: ITests = {
  id: 18102,
  subject: 'recommence warmly',
};

export const sampleWithFullData: ITests = {
  id: 31899,
  subject: 'fooey far-flung owlishly',
};

export const sampleWithNewData: NewTests = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
