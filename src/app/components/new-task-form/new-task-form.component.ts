import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Board } from '../../models/board.model';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})
export class NewTaskFormComponent implements OnInit{
	@Output() closeModal: EventEmitter<void> = new EventEmitter();
	selectedBoard: Board | null = null;
	taskName: string = '';
	taskDescription: string = '';
	taskResponsible: string = '';
	taskStatus: string = '';
	subtasks: string[] = ['', ''];

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.boardService.selectedBoard$.subscribe(board => this.selectedBoard = board)
		if (this.selectedBoard) this.taskStatus = this.selectedBoard.columns[0].name || '';
	}

	trackbyTask(index: number): number {
		return index;
	}

	addSubTask():void {
		this.subtasks.push('');
	}

	removeSubTask(index: number): void {
		if (this.subtasks.length > 1) {
			this.subtasks.splice(index, 1)
		}
	}

	handleCreateNewTask(): void {
		const data = {
			title: this.taskName,
			description: this.taskDescription,
			responsible: this.taskResponsible,
			subtasks: this.subtasks,
			status: this.taskStatus
		};
		this.boardService.createNewTask(data);
		this.closeModal.emit();
	}
}
