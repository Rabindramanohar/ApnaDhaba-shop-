import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub :  Subscription
    collapsed: boolean = true;

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService) {}

    /* @Output() featuredSelected= new EventEmitter<string>();
    collapsed = true;


    onSelect(feature: string) {
        this.featuredSelected.emit(feature)
    } */
    onSaveData() {
        this.dataStorageService.storeRecipe();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipe().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
            
        })
    }

    ngOnDestroy() {
        this.userSub.unsubscribe()
    }
}