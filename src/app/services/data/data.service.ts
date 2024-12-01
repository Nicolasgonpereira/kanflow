import { Injectable } from '@angular/core';
import { Board } from '../../models/board.model';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	private localStorageKey = 'kanban_data';

	getBoards(): Board[] {
		const data = localStorage.getItem(this.localStorageKey);
		if (!data) return [];
		const parsedBoards: Board[] = JSON.parse(data);
		return parsedBoards.map(board => Board.fromJSON(board));
	}

	saveBoard(selectedBoard: Board): void {
		let boards = this.getBoards();
		const index = boards.findIndex((b: Board) => b.id === selectedBoard.id);
		if (index !== -1) {
			boards[index] = selectedBoard;
		} else {
			boards.push(selectedBoard);
		}
		localStorage.setItem(this.localStorageKey, JSON.stringify(boards));
	}

	saveBoards(boards: Board[]): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(boards));
	}

	createBoard(title: string, columns: {name: string, tasks: Task[]}[] = []): Board {
		const boards = this.getBoards();
		const newId = boards.length ? Math.max(...boards.map(board => board.id)) + 1 : 1;
		const newBoard = new Board(newId, title, columns)
		this.saveBoard(newBoard);
		return newBoard;
	}
}
