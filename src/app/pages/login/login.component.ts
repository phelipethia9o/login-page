import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
