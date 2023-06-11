import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGradePage } from './edit-grade.page';

const routes: Routes = [
  {
    path: '',
    component: EditGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGradePageRoutingModule {}
