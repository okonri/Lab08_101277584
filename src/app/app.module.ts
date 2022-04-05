import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentsComponent } from 'src/students.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
