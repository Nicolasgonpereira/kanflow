import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Board } from '../../models/board.model';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-edit-board-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-board-form.component.html',
  styleUrl: './edit-board-form.component.css'
})
export class EditBoardFormComponent implements OnInit {
	editableBoard: Board = new Board(0, '', []);

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.boardService.selectedBoard$.subscribe(board => {
			if (board) {
				this.editableBoard = Board.fromJSON(board);
			}
		});
	}

	trackByColumn(index: number): number {
		return index;
	}

	removeColumn(index: number): void {
		this.editableBoard.columns.splice(index, 1);
	}

	addColumn(): void {
		this.editableBoard.addColumn();
	}

	handleEditBoard(): void {
		this.boardService.saveBoards(this.editableBoard);
		this.boardService.selectBoard(this.editableBoard);
	}

}
