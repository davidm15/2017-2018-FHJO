
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  userName: string;

  login(): void {
    this.userName = 'Max';
  }

  logout(): void {
    this.userName = null;
  }
}
