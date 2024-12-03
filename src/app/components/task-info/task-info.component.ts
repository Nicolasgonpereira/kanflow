import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubTask } from '../../models/subtask.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';
import { ActionConfirmationComponent } from "../action-confirmation/action-confirmation.component";
import { DropDownComponent } from "../drop-down/drop-down.component";
import { EditTaskFormComponent } from "../edit-task-form/edit-task-form.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, DropDownComponent, ModalComponent, EditTaskFormComponent, ActionConfirmationComponent],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent {
	@Input() task!: Task;
	isDropdownSettingsOpen: boolean = false;
	isEditTaskModalOpen: boolean = false;
	isDeletingModalOpen: boolean = false;
	@Output() closeModal: EventEmitter<void> = new EventEmitter();
	dropDownStyles: {[key: string]: string} = {'transform': 'translate(-100%, 20px)'};

	constructor (private boardService: BoardService) {}


	openDropdownSettings(): void {
		this.isDropdownSettingsOpen = true;
	}

	closeDropdownSettings(): void {
		this.isDropdownSettingsOpen = false;
	}

	openEditTaskModal(): void {
		this.isEditTaskModalOpen = true;
	}

	closeEditTaskModal(): void {
		this.isEditTaskModalOpen = false;
	}

	handleSubtaskCompletion(subtask: SubTask): void {
		this.boardService.saveSubtaskCompletion(this.task, subtask);
	}

	deleteTask(): void {
		this.boardService.deleteTask(this.task);
		this.closeModal.emit();
	}

	openDeleteModal(): void {
		this.isDeletingModalOpen = true;
	}

	closeDeleteModal(): void {
		this.isDeletingModalOpen = false;
	}
}
