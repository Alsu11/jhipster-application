import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    data: { pageTitle: 'jhipsterApplicationApp.material.home.title' },
    loadChildren: () => import('./material/material.routes'),
  },
  {
    path: 'student',
    data: { pageTitle: 'jhipsterApplicationApp.student.home.title' },
    loadChildren: () => import('./student/student.routes'),
  },
  {
    path: 'tests',
    data: { pageTitle: 'jhipsterApplicationApp.tests.home.title' },
    loadChildren: () => import('./tests/tests.routes'),
  },
  {
    path: 'question',
    data: { pageTitle: 'jhipsterApplicationApp.question.home.title' },
    loadChildren: () => import('./question/question.routes'),
  },
  {
    path: 'tests-students',
    data: { pageTitle: 'jhipsterApplicationApp.testsStudents.home.title' },
    loadChildren: () => import('./tests-students/tests-students.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
