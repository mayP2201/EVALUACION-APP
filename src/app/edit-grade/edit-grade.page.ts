import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
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
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      nota1: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      nota2: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      nota3: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      nota4: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      nota5: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      
      // total: new FormControl({ value: "", disabled: true }), // Deshabilita el input del Total
      total: new FormControl('', Validators.required)
    })
    this.subscribeToFormChanges();
    
    console.log(this.updateBookingForm.value)
  }

  private subscribeToFormChanges() {

    this.updateBookingForm.valueChanges.subscribe(() => {
      this.calculateTotal();
    })
  }

  private calculateTotal() {
    const nota1 = Number(this.updateBookingForm.value.nota1);
    const nota2 = Number(this.updateBookingForm.value.nota2);
    const nota3 = Number(this.updateBookingForm.value.nota3);
    const nota4 = Number(this.updateBookingForm.value.nota4);
    const nota5 = Number(this.updateBookingForm.value.nota5);
    const promedio = (nota1 * 0.2 + nota2 * 0.2 + nota3 * 0.2 + nota4 * 0.1 + nota5 * 0.3);
    
    if (!isNaN(promedio)) {
      this.updateBookingForm.patchValue({ total: promedio.toFixed(2) });
    } else {
      this.updateBookingForm.patchValue({ total: '' });
    }
}

  updateForm() {
    this.gdService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => console.log(error));
  }
}