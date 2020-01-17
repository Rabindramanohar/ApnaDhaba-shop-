import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSnipperComponent } from './loading-snipper/loading-snipper';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropDown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSnipperComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [CommonModule],
    exports: [
        AlertComponent,
        LoadingSnipperComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    entryComponents: [AlertComponent]
})
export class SharedModule {}
