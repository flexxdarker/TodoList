import { Component, EventEmitter, Input, Output } from "@angular/core";
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

    @Output() removeEvent = new EventEmitter<number>();

    changeStatus(): void{
        this.task.isDone = !this.task.isDone;
    }

    remove(): void{
        this.removeEvent.emit(this.task.id);
    }
}