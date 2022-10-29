import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mid') mid!: ElementRef;

  destroy$ = new Subject<void>();

  constructor(private _router: Router) {}
  currentRoute$ = this._router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    takeUntil(this.destroy$)
  );

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.currentRoute$.subscribe((e) => {
      const nav = e as NavigationEnd;
      const urlArr = ['equipment', 'info', 'stats'];

      if (urlArr.includes(nav.url.replace('/', ''))) {
        this.mid.nativeElement.classList.remove(...urlArr);

        this.mid.nativeElement.classList.add(
          (e as NavigationEnd).url.replace('/', '')
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  preventDefault(e: Event) {
    e.preventDefault();
    return null;
  }
}
