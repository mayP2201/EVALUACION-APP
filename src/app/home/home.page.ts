import { Component, OnInit } from '@angular/core';
import { GradeService } from './../shared/grade.service';
import { Grade } from '../shared/Grade';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private gdService: GradeService) {}

}
