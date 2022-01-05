import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'bp-today-clock',
	templateUrl: './today-clock.component.html',
	styleUrls: ['./today-clock.component.scss'],
})
export class TodayClockComponent implements OnInit, OnDestroy {

	currentTime = new Date();

	private unsubscribeAll: Subject<null> = new Subject<null>();

	ngOnInit(): void {
		interval(1000).pipe(
			takeUntil(this.unsubscribeAll)
		).subscribe(() => {
			this.currentTime = new Date();
		});
	}

	ngOnDestroy(): void {
		this.unsubscribeAll.next(null);
		this.unsubscribeAll.complete();
	}

}
