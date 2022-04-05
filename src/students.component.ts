import { Component } from '@angular/core'

@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }}</h2>'
})

export class StudentsComponent {
    title = "My List of Students  ";

    //today = new Date();
    //currentDate: string = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    
   // getCurrentDate(){
   //     return this.currentDate; // '2022-2-6'
   // }

    getTitle(){
        let newTitle = this.title;//.concat(this.getCurrentDate());
        return newTitle;
    }


}