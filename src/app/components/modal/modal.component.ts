import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
	@Output() closeModal: EventEmitter<void> = new EventEmitter();

	close(): void {
		this.closeModal.emit();
	}
}
