import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLoginButtonClick() {
    this.auth.loginWithRedirect(
      {
        appState: {
          target: '/voters',
        }
      }
    );
  }

  onRegisterButtonClick() {
    this.auth.loginWithRedirect({
      screen_hint: 'Register',
      appState: {
        target: '/voters',
      }
    })
  }
}
