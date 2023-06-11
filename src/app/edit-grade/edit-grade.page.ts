import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GradeService } from './../shared/grade.service';
@Component({
  selector: 'app-edit-grade',
  templateUrl: './edit-grade.page.html',
  styleUrls: ['./edit-grade.page.scss'],
})
export class EditGradePage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private gdService: GradeService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.gdService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }
  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      nota1: [''],
      nota2: [''],
      nota3: [''],
      nota4: [''],
      nota5: [''],
      total: [''],
    })
    console.log(this.updateBookingForm.value)
  }
  updateForm() {
    this.gdService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
}