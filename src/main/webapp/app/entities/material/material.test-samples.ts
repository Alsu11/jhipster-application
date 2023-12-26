import { IMaterial, NewMaterial } from './material.model';

export const sampleWithRequiredData: IMaterial = {
  id: 29478,
};

export const sampleWithPartialData: IMaterial = {
  id: 17853,
  topic: 'technologist',
};

export const sampleWithFullData: IMaterial = {
  id: 19537,
  topic: 'scent duh flavor',
  link: 'for although shrilly',
};

export const sampleWithNewData: NewMaterial = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
