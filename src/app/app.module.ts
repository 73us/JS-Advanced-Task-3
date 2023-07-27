import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson03taskComponent } from './lesson03task/lesson03task.component';
import { ChildComponent } from './lesson03task/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson03taskComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
