import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubTask } from '../../models/subtask.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';
import { DropDownComponent } from "../drop-down/drop-down.component";

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, DropDownComponent],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent {
	@Input() task!: Task;
	isDropdownSettingsOpen: boolean = false;
	@Output() closeModal: EventEmitter<void> = new EventEmitter();
	@Output() openEditTaskModal: EventEmitter<void> = new EventEmitter();
	@Output() openDeleteTaskModal: EventEmitter<void> = new EventEmitter();
	dropDownStyles: {[key: string]: string} = {'transform': 'translate(-100%, 20px)'};

	constructor (private boardService: BoardService) {}


	openDropdownSettings(): void {
		this.isDropdownSettingsOpen = true;
	}

	closeDropdownSettings(): void {
		this.isDropdownSettingsOpen = false;
	}

	openEditTask(): void {
		this.openEditTaskModal.emit();
	}

	handleSubtaskCompletion(subtask: SubTask): void {
		this.boardService.saveSubtaskCompletion(this.task, subtask);
	}

	openDeleteModal(): void {
		this.openDeleteTaskModal.emit();
	}
}
