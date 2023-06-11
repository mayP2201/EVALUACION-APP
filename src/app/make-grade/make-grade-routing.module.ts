import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeGradePage } from './make-grade.page';

const routes: Routes = [
  {
    path: '',
    component: MakeGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeGradePageRoutingModule {}
