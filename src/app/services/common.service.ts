import { Injectable, EventEmitter } from "@angular/core";
import { environment } from './../../environments/environment';

@Injectable()
export class CommonService {

    displayJamp: EventEmitter<boolean>;
    baseHref: string;

    constructor() {
        this.displayJamp = new EventEmitter();
        this.baseHref = environment.baseHref;
    }

    displayJampScreen(state: boolean) {
        this.displayJamp.emit(state);
    }

}