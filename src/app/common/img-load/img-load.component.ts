import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'app-load-image',
    templateUrl: './img-load.component.html',
    styleUrls: ['./img-load.component.css']

})
export class LoadImage implements OnInit {

    @Input()
    imageUrl: string;

    @Input()
    classes: string;

    imageLoaded = false;
    styles: any;

    constructor() {
    }

    ngOnInit() {
        let image = new Image();
        image.addEventListener('load', () => {
            const backgroundUrl = "url('" + this.imageUrl + "')";
            this.styles = { 'background-image': backgroundUrl }
            this.imageLoaded = true;
        });
        image.src = this.imageUrl;
    }
}