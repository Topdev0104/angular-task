import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FirebaseService } from '../services';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'line-chart';

	constructor(public firebase: FirebaseService) {}
}
