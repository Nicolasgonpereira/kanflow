import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private readonly darkThemeClass = 'dark-theme';

	toggleTheme(): void {
		const isDarkMode = document.body.classList.toggle(this.darkThemeClass)
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}

	setTheme(): void {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.body.classList.add(this.darkThemeClass);
		}
	}
}
