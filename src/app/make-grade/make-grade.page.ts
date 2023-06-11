import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators  } from "@angular/forms";
import { GradeService} from './../shared/grade.service';
@Component({
  selector: 'app-make-grade',
  templateUrl: './make-grade.page.html',
  styleUrls: ['./make-grade.page.scss'],
})
export class MakeGradePage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private gdService: GradeService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  
  ngOnInit() {
    this.bookingForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      nota3: ['', Validators.required],
      nota4: ['', Validators.required],
      nota5: ['', Validators.required],
      total: ['', Validators.required],
    });
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return;
    }

    this.gdService.createBooking(this.bookingForm.value)
      .then(() => {
        this.bookingForm.reset();
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
}
