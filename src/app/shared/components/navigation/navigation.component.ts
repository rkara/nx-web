import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  get user$() {
    return this.auth.user$;
  }

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService) { }

  onLogoutButtonClick() {
    this.auth.logout({ returnTo: this.document.location.origin })
  }
}
