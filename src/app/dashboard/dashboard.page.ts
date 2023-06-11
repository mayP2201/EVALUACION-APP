import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { GradeService } from '../shared/grade.service';
import { Grade } from '../shared/Grade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  Bookings: Grade[] = [];
  constructor(
    public authService: AuthenticationService,
    private gdService: GradeService
  ) {}

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.gdService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a: any = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Grade);
      })
    })
  }

  fetchBookings() {
    this.gdService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id: string) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.gdService.deleteBooking(id);
    }
  }
}