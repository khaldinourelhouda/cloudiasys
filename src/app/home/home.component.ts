import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../models';
import { UserService, AuthenticationService } from '../services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
    currentUser: boolean;
    currentUserSubscription: Subscription;
    users: User[] = [];
    email : string; 
    password : string ;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private cookieService: CookieService,
        private router: Router
    ) {
       // this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            
      //  });
    }

    ngOnInit() {
        //this.loadAllUsers();
      //  this.currentUser = this.authenticationService.currentUser;
     
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
      // this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}