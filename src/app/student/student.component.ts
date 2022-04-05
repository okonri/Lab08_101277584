import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  today = new Date();
  currentDate: string = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

  getCurrentDate(){
    return this.currentDate; // '2022-2-6'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
