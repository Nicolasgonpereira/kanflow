import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board/board.service';
import { BoardListComponent } from "../board-list/board-list.component";
import { DropDownComponent } from "../drop-down/drop-down.component";
import { EditBoardFormComponent } from "../edit-board-form/edit-board-form.component";
import { ModalComponent } from "../modal/modal.component";
import { NewBoardFormComponent } from "../new-board-form/new-board-form.component";
import { NewTaskFormComponent } from "../new-task-form/new-task-form.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalComponent, CommonModule, BoardListComponent, NewBoardFormComponent, NewTaskFormComponent, EditBoardFormComponent, DropDownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
	selectedBoardName: string = 'No Board Selected';
	isSelectBoardModalOpen: boolean = false;
	isNewBoardModalOpen: boolean = false;
	isNewTaskModalOpen: boolean = false;
	isEditBoardModalOpen: boolean = false;
	isdropdownSettingsOpen: boolean = false;
	dropDownStyles: {[key:string]: string} = {right: '10px', 'top': '0px', 'transform': 'translate(0, 100%)'};

	constructor (private boardService: BoardService) {}

	ngOnInit(): void {
		this.boardService.selectedBoard$.subscribe(board => {
			if (board) {
				this.selectedBoardName = board.title;
			}
		})
	}

	openSelectModal(): void {
		this.isSelectBoardModalOpen = true;
	}

	closeSelectModal(): void {
		this.isSelectBoardModalOpen = false;
	}

	openNewBoardModal(): void {
		this.closeSelectModal();
		this.isNewBoardModalOpen = true;
	}

	closeNewBoardModal(): void {
		this.isNewBoardModalOpen = false;
	}

	openNewTaskModal(): void {
		if(this.selectedBoardName)
			this.isNewTaskModalOpen = true;
	}

	closeNewTaskModal(): void {
		this.isNewTaskModalOpen = false;
	}

	openEditBoardModal(): void {
		if(this.selectedBoardName)
			this.isEditBoardModalOpen = true;
	}

	closeEditBoardModal(): void {
		this.isEditBoardModalOpen = false;
	}

	openDropdownSettingsOpen(): void {
		this.isdropdownSettingsOpen = true;
	}

	closeDropdownSettingsOpen(): void {
		this.isdropdownSettingsOpen = false;
	}
}
