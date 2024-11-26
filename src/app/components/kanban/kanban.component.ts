import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { Task } from '../../models/task.model';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css'
})
export class KanbanComponent implements OnInit {
	selectedBoard: Board | null = null;
	connectedDropLists: string[] = [];

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.boardService.selectedBoard$.subscribe(board => {
			this.selectedBoard = board;
			if (board)
			this.connectedDropLists = board.columns.map(column => column.name);
		});
	}

	drop(event: CdkDragDrop<Task[]>):void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
		this.saveChanges();
	}

	saveChanges() {
		if (this.selectedBoard)
		this.boardService.saveBoards(this.selectedBoard);
	}
}
