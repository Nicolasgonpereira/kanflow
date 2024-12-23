import { SubTask } from "./subtask.model";

export class Task {
	title: string;
	description: string;
	responsible: string;
	dueDate: Date;
	subtasks: SubTask[];
	createdAt: Date;
	updatedAt: Date;

	constructor (
		title: string,
		description: string,
		responsible: string,
		dueDate: Date,
		subtasks: SubTask[],
		createdAt: Date,
		updatedAt: Date,
	) {
		this.title = title;
		this.description = description;
		this.responsible = responsible;
		this.dueDate = dueDate;
		this.subtasks = subtasks;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	getCompletedSubtasksCount(): number {
		return this.subtasks.reduce((acc, cur) => acc + (cur.isCompleted ? 1 : 0), 0);
	}

	getAllSubtasksCount(): number {
		return this.subtasks.length;
	}

	findSubtask(subtask: SubTask): SubTask | undefined {
		const foundSubtask = this.subtasks.find((element: SubTask) => element === subtask)
		if (foundSubtask) {
			return foundSubtask;
		}
		return undefined;
	}

	editTask(taskToUpdate: Task): void {
		this.title = taskToUpdate.title;
		this.description = taskToUpdate.description;
		this.responsible = taskToUpdate.responsible;
		this.subtasks = taskToUpdate.subtasks;
	}

	static fromJSON(json: Task): Task {
		return new Task(
			json.title,
			json.description,
			json.responsible,
			new Date(json.dueDate),
			json.subtasks.map(subtask => SubTask.fromJSON(subtask)),
			new Date(json.createdAt),
			new Date(json.updatedAt),
		)
	}
}
