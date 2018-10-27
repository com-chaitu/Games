import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CommonService {

    displayJamp: EventEmitter<boolean>;

    constructor() {
        this.displayJamp = new EventEmitter();
    }

    displayJampScreen(state: boolean) {
        this.displayJamp.emit(state);
    }

}