import { Component } from '@angular/core';

@Component({
    selector: 'app-loading-snipper',
    // tslint:disable-next-line:max-line-length
    template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./loading-snipper.css']
})
export class LoadingSnipperComponent {

}
