import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeGradePageRoutingModule } from './make-grade-routing.module';

import { MakeGradePage } from './make-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeGradePageRoutingModule
  ],
  declarations: [MakeGradePage]
})
export class MakeGradePageModule {}
