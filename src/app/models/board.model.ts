import { Task } from "./task.model";

interface Column {
	name: string,
	tasks: Task[]
}

export class Board {
	id: number;
	title: string;
	columns: Column[];

	constructor (
		id: number,
		title: string,
		columns: Column[] = [],
	) {
		this.id = id;
		this.title = title;
		this.columns = columns;
	}

	getStatuses(): string[] {
		const statuses = this.columns.map((column: Column) => {
			return column.name;
		})
		return statuses;
	}

	addTask(columnName: string, newTask: Task) {
		const targetColumn = this.columns.find(column => column.name === columnName);
		targetColumn?.tasks.push(newTask);
	}

	removeColumn(index: number): void {
		this.columns.splice(index, 1)
	}

	addColumn(): void {
		this.columns.push({name:'',tasks: []})
	}

	static fromJSON(json: any): Board {
		return new Board(
			json.id,
			json.title,
			json.columns.map((column:any) => (
				{name: column.name,
					tasks: (column.tasks.map((task:any)=> Task.fromJSON(task)))
				}
			))
		);
	}
}
