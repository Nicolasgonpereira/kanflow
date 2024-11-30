import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { KanbanComponent } from "./components/kanban/kanban.component";
import { ThemeService } from './services/theme/theme.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, KanbanComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	title = 'kanflow';

	constructor(private themeService: ThemeService) {}

	ngOnInit(): void {
		this.themeService.setTheme();
	}
}
