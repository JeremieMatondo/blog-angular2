import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  async register(fullName: string, email: string, password: string) {
    let rep = await fetch('', {
      method: 'POST',
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response => response.json()));

    return rep
  }

  async login(email: string, password: string): Promise<UserLogin> {
    let rep = await fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())

    return rep
  }
  
}
