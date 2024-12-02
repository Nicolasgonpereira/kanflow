import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubTask } from '../../models/subtask.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-edit-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.css'
})
export class EditTaskFormComponent {
	@Input() task!: Task;
	@Output() closeModal: EventEmitter<void> = new EventEmitter();
	editableTask: Task = new Task('', '', '', new Date(), [new SubTask('', false)], new Date(), new Date())

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.editableTask = Task.fromJSON(this.task);
	}

	trackByTask(index: number): number {
		return index;
	}

	addSubTask():void {
		this.editableTask.subtasks.push(new SubTask('', false));
	}

	removeSubTask(index: number): void {
		if (this.editableTask.subtasks.length > 1) {
			this.editableTask.subtasks.splice(index, 1)
		}
	}

	handleEditTask(): void {
		this.boardService.editTask(this.task, this.editableTask)
		this.closeModal.emit();
	}
}
