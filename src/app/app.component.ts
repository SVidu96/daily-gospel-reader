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
    console.log('Started');
    this.api.get(this.formatDate()).subscribe((res) => {
      this.response = res.data;
      this.initialize(this.response);
      console.log('data response ', res);
    });
    console.log("End ");
    console.log(this.formattedResponse)
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


  initialize(data:any){
    this.formattedResponse.gospel_date = data.date;
    
    this.formattedResponse.date_displayed = data.date_displayed;
    
    this.formattedResponse.readings = data.readings;
    var readingIndex = this.formattedResponse.readings.findIndex(t=> t.type==this.formattedResponse.READINGTYPE);
    
    this.formattedResponse.readings_type = this.formattedResponse.readings[readingIndex].type;
    
    this.formattedResponse.readings_reference_displayed = this.formattedResponse.readings[readingIndex].reference_displayed;
    
    this.formattedResponse.readings_title = this.formattedResponse.readings[readingIndex].title;
    
    this.formattedResponse.readings_text = this.formattedResponse.readings[readingIndex].text;
    
    this.formattedResponse.readings_text = this.refineReadingsText(this.formattedResponse.readings_text.split("\n"));
  }

  refineReadingsText(textList:string[]){
    var i =0;
    let arr =""
    textList.forEach(element => {
      var index = element.lastIndexOf("]");
      arr+=(element.substr(index+1,element.length));
    });
    return arr;
  }
}
