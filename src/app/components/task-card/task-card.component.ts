import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { ModalComponent } from "../modal/modal.component";
import { TaskInfoComponent } from "../task-info/task-info.component";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, ModalComponent, TaskInfoComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
	@Input() task!: Task;
	@Output() toggleDragActive: EventEmitter<void> = new EventEmitter;
	isTaskInfoModalOpen: boolean = false;

	openTaskInfoModal(): void {
		this.isTaskInfoModalOpen = true;
		this.toggleDrag();
	}

	closeTaskInfoModal(): void {
		this.isTaskInfoModalOpen = false;
		this.toggleDrag();
	}

	toggleDrag(): void {
		this.toggleDragActive.emit();
	}
}
