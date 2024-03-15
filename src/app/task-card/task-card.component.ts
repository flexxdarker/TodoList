import { Component, Input } from "@angular/core";
import { ITask } from "../task";

@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: './task-card.component.html',
    styleUrl: './task-card.component.css',
})
export class TaskCardComponent{
    @Input()
    task: ITask = {
        id: 0,
        name: "",
        date: new Date,
        isDone: false,
        isImportant: false
    }
}