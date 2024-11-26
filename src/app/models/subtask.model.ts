export class SubTask {
	title: string;
	isCompleted: boolean

	constructor (
		title: string,
		isCompleted: boolean = false
	) {
		this.title = title
		this.isCompleted = isCompleted;
	}

	toggleCompletion() {
		this.isCompleted = !this.isCompleted;
	}

	static fromJSON(json: SubTask): SubTask {
		return new SubTask(json.title,json.isCompleted);
	}
}
