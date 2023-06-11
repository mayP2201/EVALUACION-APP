import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Grade } from './Grade';
@Injectable({
  providedIn: 'root',
})
export class GradeService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(gd: Grade) {
    return this.bookingListRef.push({
      nombre: gd.nombre,
      apellido: gd.apellido,
      nota1: gd.nota1,
      nota2: gd.nota2,
      nota3: gd.nota3,
      nota4: gd.nota4,
      nota5: gd.nota5,
      total: gd.total
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/grades/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/grades');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: string, gd: Grade) {
    return this.bookingRef.update({
      nombre: gd.nombre,
      apellido: gd.apellido,
      nota1: gd.nota1,
      nota2: gd.nota2,
      nota3: gd.nota3,
      nota4: gd.nota4,
      nota5: gd.nota5,
      total:gd.total,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/grades/' + id);
    this.bookingRef.remove();
  }
}