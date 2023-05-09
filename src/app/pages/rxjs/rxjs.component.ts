import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  interval,
  map,
  retry,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
    // * Retry try to execute the observable again n times
    // this.returnObservable()
    //   .pipe(retry(2))
    //   .subscribe({
    //     next: (value) => console.log('Subs', value),
    //     error: (error) => console.error('Error', error),
    //     complete: () => console.log('Obs complete'),
    //   });

    this.intervalSubs = this.returnInterval().subscribe({
      next: console.log,
    });
  }

  ngOnDestroy(): void {
    // * unsubscribe method is used to unsubscribe from the observable
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    // * Take operator allows to complete the observable after n times
    // * Map operator allows to transform the value emitted by the observable
    // * Filter operator allows to filter the value emitted by the observable
    return interval(100).pipe(
      // take(10),
      map((value) => value + 1),
      filter((value) => value % 2 === 0)
    );
  }

  returnObservable() {
    let i = -1;

    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i is equal to 2');
        }
      }, 1000);
    });
  }
}
