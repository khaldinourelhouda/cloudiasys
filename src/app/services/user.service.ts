import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
   
    apiUrl = 'http://127.0.0.1:8000';
    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/api/v1/auth/freelance-registration/`, user);
    }

    registerEntreprise(user: User) {
        return this.http.post(`${this.apiUrl}/api/v1/auth/registration/`, user);
    }

    update(user: User) {
        return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
}