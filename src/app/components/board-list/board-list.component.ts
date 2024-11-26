import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Board } from '../../models/board.model';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit{
	isBoardListVisible:boolean = true;
	boards: Board[] = [];
	@Output() closeNotify: EventEmitter<void> = new EventEmitter();
	@Output() onNewBoardNotify: EventEmitter<void> = new EventEmitter();

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.boards = this.boardService.getBoards();
	}

	onSelectBoard(board: Board): void {
		this.boardService.selectBoard(Board.fromJSON(board));
		this.close();
	}

	onNewBoard(): void {
		this.onNewBoardNotify.emit();
	}

	close(): void {
		this.closeNotify.emit();
	}
}
