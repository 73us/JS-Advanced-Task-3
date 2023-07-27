import {  Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-lesson03task',
  templateUrl: './lesson03task.component.html',
  styleUrls: ['./lesson03task.component.scss'],
})
export class Lesson03taskComponent  {
  @ViewChild(ChildComponent) childComp!: ChildComponent;

  public userFirstName = 'Roman';
  public userLastName = 'Semeniuk';
  public taskCount = 0;
  public taskName!: string;
  public editStatus = false;

  public addTask(): void {
    let newTask = {
      name: this.taskName,
      status: false,
    };
    this.childComp.taskList.push(newTask);
    this.taskName = '';
    this.taskCount = this.childComp.taskList.length;
  }

  getCount(data: number): void {
    this.taskCount = data;
  }
}
