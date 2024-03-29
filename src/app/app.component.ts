import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITask, Tasks } from './task';
import { TaskCardComponent } from "./task-card/task-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TaskCardComponent]
})
export class AppComponent {
  title = 'TodoList';
  tasks: ITask[] = Tasks
  constructor() { }
  
  removeTask(id:number): void {
    const index = this.tasks.findIndex(x => x.id === id);
    if(index !== -1)
    this.tasks.splice(index, 1);
  }

  createTask(task: ITask): void {
    this.tasks.push(task);
  }
  
}
