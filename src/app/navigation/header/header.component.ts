import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSideNav = new EventEmitter();
  authSubscription: Subscription;
  isAuth: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authState => {
      this.isAuth = authState;
    })
  }

  ToggleSide() {
    this.toggleSideNav.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
