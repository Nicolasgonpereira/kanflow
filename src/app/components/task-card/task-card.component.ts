import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
	isTaskInfoModalOpen: boolean = false;

	openTaskInfoModal(): void {
		this.isTaskInfoModalOpen = true;
	}

	closeTaskInfoModal(): void {
		this.isTaskInfoModalOpen = false;
	}
}
