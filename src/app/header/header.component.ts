import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) {}

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
}