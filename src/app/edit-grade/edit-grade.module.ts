import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGradePageRoutingModule } from './edit-grade-routing.module';

import { EditGradePage } from './edit-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditGradePageRoutingModule
  ],
  declarations: [EditGradePage]
})
export class EditGradePageModule {}
