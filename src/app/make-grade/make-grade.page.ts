import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators, FormControl } from "@angular/forms";
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
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      nota1: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      nota2: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      nota3: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      nota4: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      nota5: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      
      // total: new FormControl({ value: "", disabled: true }), // Deshabilita el input del Total
      total: new FormControl('', Validators.required)
    });

    this.subscribeToFormChanges(); // Suscribe a los cambios en el formulario
  }

  private subscribeToFormChanges() {

    this.bookingForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    })
  }

  private calculateTotal() {
      const nota1 = Number(this.bookingForm.value.nota1);
      const nota2 = Number(this.bookingForm.value.nota2);
      const nota3 = Number(this.bookingForm.value.nota3);
      const nota4 = Number(this.bookingForm.value.nota4);
      const nota5 = Number(this.bookingForm.value.nota5);
      const promedio = (nota1 * 0.2 + nota2 * 0.2 + nota3 * 0.2 + nota4 * 0.1 + nota5 * 0.3);
      
      if (!isNaN(promedio)) {
        this.bookingForm.patchValue({ total: promedio.toFixed(2) });
      } else {
        this.bookingForm.patchValue({ total: '' });
      }
  }

  formSubmit() {
    this.gdService.createBooking(this.bookingForm.value)
      .then(() => {
        this.bookingForm.reset();
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
}
