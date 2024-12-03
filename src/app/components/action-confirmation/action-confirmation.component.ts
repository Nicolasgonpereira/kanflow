import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-confirmation',
  imports: [],
  templateUrl: './action-confirmation.component.html',
  styleUrl: './action-confirmation.component.css'
})
export class ActionConfirmationComponent {
	@Input() title!: string;
	@Input() description!: string;
	@Input() buttonName!: string;
	@Input() buttonAction!: () => void;
	@Output() closeModal: EventEmitter<void> = new EventEmitter();

	close(): void {
		this.closeModal.emit();
	}
}
