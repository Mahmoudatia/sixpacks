import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeNavigation = new EventEmitter<void>();
  isAuth = false;
  subscription: Subscription
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.authChange.subscribe(authState => {
      this.isAuth = authState
    });
  }

  closeNav() {
    this.closeNavigation.emit();
  }

  onLogout() {
    this.closeNav();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
