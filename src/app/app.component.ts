import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { DailyGospelModel } from './dailyGospelModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  response: any;
  formattedResponse: DailyGospelModel = new DailyGospelModel();
  title: "my app";

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log('working');

    this.api.get(this.formatDate()).subscribe((res) => {
      this.response = res.data;
      this.fillgospel_date(this.response);
      this.fillreadings(this.response);
      console.log('data response', res);
    });
    console.log(this.formatDate());
  }

  formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var dateStr = year + '-' + month + '-' + day;
    return dateStr;
  }

  fillgospel_date(data: any) {
    this.formattedResponse.gospel_date = data.date;
  }

  filldate_displayed(data:any){
    this.formattedResponse.date_displayed = data.date_displayed;
  }

  fillreadings(data:any){
    this.formattedResponse.readings = data.readings;
    debugger;
  }

  // fillreadings_type(data:any){
  //   this.formattedResponse.readings_type = data.readings;
  // }
  // fillreadings_reference_displayed(){

  // } TODO::::
}
