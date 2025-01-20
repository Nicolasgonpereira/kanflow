import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';
import { ActionConfirmationComponent } from "../action-confirmation/action-confirmation.component";
import { EditTaskFormComponent } from "../edit-task-form/edit-task-form.component";
import { ModalComponent } from "../modal/modal.component";
import { TaskInfoComponent } from "../task-info/task-info.component";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, ModalComponent, TaskInfoComponent, EditTaskFormComponent, ActionConfirmationComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
	@Input() task!: Task;
	isEditTaskModalOpen: boolean = false;
	isDeletingModalOpen: boolean = false;
	@Output() toggleDragActive: EventEmitter<void> = new EventEmitter;
	isTaskInfoModalOpen: boolean = false;

	constructor (private boardService: BoardService) {}

	openTaskInfoModal(): void {
		this.isTaskInfoModalOpen = true;
		this.toggleDrag();
	}

	closeTaskInfoModal(): void {
		this.isTaskInfoModalOpen = false;
		this.toggleDrag();
	}

	openEditTaskModal(): void {
		this.isEditTaskModalOpen = true;
	}

	closeEditTaskModal(): void {
		this.isEditTaskModalOpen = false;
	}

	openDeleteModal(): void {
		this.isDeletingModalOpen = true;
	}

	closeDeleteModal(): void {
		this.isDeletingModalOpen = false;
	}

	deleteTask(): void {
		this.boardService.deleteTask(this.task);
		this.toggleDrag();
	}

	toggleDrag(): void {
		this.toggleDragActive.emit();
	}
}
