import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css'
})
export class DropDownComponent {
	@Input() customStyles: {[key: string]: string} = {};
	@Output() closeDropdown = new EventEmitter<void>();

	close(): void {
		this.closeDropdown.emit();
	}
}
