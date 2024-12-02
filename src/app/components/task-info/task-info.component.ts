import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SubTask } from '../../models/subtask.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';
import { DropDownComponent } from "../drop-down/drop-down.component";
import { EditTaskFormComponent } from "../edit-task-form/edit-task-form.component";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, DropDownComponent, ModalComponent, EditTaskFormComponent],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent {
	@Input() task!: Task;
	isDropdownSettingsOpen: boolean = false;
	isEditTaskModalOpen: boolean = false;
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
	}
}
