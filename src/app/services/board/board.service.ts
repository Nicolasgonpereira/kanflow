import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../../models/board.model';
import { SubTask } from '../../models/subtask.model';
import { Task } from '../../models/task.model';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class BoardService {
	private selectedBoardSuject = new BehaviorSubject<Board | null>(null);
	selectedBoard$ = this.selectedBoardSuject.asObservable();

	constructor (private dataService: DataService) {}

	getBoards(): Board[] {
		return this.dataService.getBoards();
	}

	selectBoard(board: Board | null): void {
		this.selectedBoardSuject.next(board);
	}

	saveBoard(board: Board): void {
		this.dataService.saveBoard(board);
	}

	createNewBoard(newBoardData: any): void {
		const boardName = newBoardData.boardName;
		const columns = newBoardData.columns
			.map((columnName:string) => (
				{name: columnName, tasks: []}
			));
		const newBoard = this.dataService.createBoard(boardName, columns);
		this.selectBoard(newBoard)
	}

	deleteBoard(boardToDelete: Board): void {
		const boardsInStore = this.getBoards();
		for (let board of boardsInStore) {
			if (board.id === boardToDelete.id) {
				const updatedBoardsInStore = boardsInStore.filter((element: Board) => element !== board)
				this.dataService.saveBoards(updatedBoardsInStore);
			}
		}
		this.selectBoard(null);
	}

	createNewTask(newTaskData: any): void {
		const newTask = new Task(
			newTaskData.title,
			newTaskData.description,
			newTaskData.responsible,
			new Date(),
			newTaskData.subtasks.map((subtask:string) => new SubTask(subtask, false)),
			new Date(),
			new Date()
		)
		const currentBoard = this.selectedBoardSuject.value;
		if (currentBoard) {
			currentBoard.addTask(newTaskData.status, newTask);
			this.selectBoard(currentBoard);
			this.dataService.saveBoard(currentBoard);
		}
	}

	saveSubtaskCompletion(task: Task, subtask: SubTask): void {
		const currentBoard = this.selectedBoardSuject.value;
		if (currentBoard) {
			const taskToUpdate = currentBoard.findTask(task);
			if (taskToUpdate) {
				const subtasktoUpdate = taskToUpdate.findSubtask(subtask);
				if(subtasktoUpdate) {
					subtasktoUpdate.toggleCompletion();
				}
			}
			this.selectBoard(currentBoard);
			this.dataService.saveBoard(currentBoard);
		}
	}
}
