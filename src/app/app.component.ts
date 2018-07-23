import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel App';
  newTrip = {
    title: ""
  }

  trips = [
    {
      title: "Trip to Rome"
    },
    {
      title: "Trip to Madrid"
    }
  ];

  addTrip(trip) {
    console.log("Trip", trip);
    this.trips.push(trip);
    this.newTrip = {title:""};
  }
}

