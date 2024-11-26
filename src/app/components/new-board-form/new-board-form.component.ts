import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-new-board-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-board-form.component.html',
  styleUrl: './new-board-form.component.css'
})
export class NewBoardFormComponent {
	boardName: string = '';
	columns: string[] = ['To do', 'Doing', 'Done'];

	constructor (private boardService: BoardService) {}

	trackByColumn(index:number): number {
		return index;
	}

	addColumn() {
		this.columns.push('');
	}

	removeColumn(index: number): void {
		if (this.columns.length > 1) {
			this.columns.splice(index, 1);
		}
	}

	handleCreateNewBoard(): void {
		const data =  {
			boardName: this.boardName,
			columns: this.columns
		};
		this.boardService.createNewBoard(data);
	}

}
