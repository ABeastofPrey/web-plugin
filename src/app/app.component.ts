import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isCollapsed = false;
	constructor(private router: Router, private route: ActivatedRoute) { }
	public jumpTo(): void {
		// this.router.navigate(['/'], { fragment: '#/client-a/page1' });
		window.location.href = `http://localhost:4200/#/client-a/page1`
	}
}
