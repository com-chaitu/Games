import { Injectable, EventEmitter } from "@angular/core";
import { environment } from './../../environments/environment';

@Injectable()
export class CommonService {

    displayJamp: EventEmitter<boolean>;
    baseHref: string;
    validationRules = {
        "emailId": {
          "isMandatory": true,
          "regex": "^(.+)@(.+)\\.[a-zA-Z]{2,5}$",
          "allowedRegex": "^(.){0,40}$"
        },
        "password": {
            "isMandatory": true,
            "regex": "^(.+)@(.+)\\.[a-zA-Z]{2,5}$",
            "allowedRegex": "^(.){0,40}$"
          },
        "firstName": {
          "isMandatory": true,
          "regex": "^[a-zA-Z ]{1,}$",
          "allowedRegex": "^[a-zA-Z ]{0,40}$"
        },
        "lastName": {
          "isMandatory": false,
          "regex": "^[a-zA-Z ]{0,}$",
          "allowedRegex": "^[a-zA-Z ]{0,40}$"
        },
        "dob": {
          "isMandatory": false,
          "regex": null,
          "allowedRegex": "^(.){0,}$"
        },
        "mobile": {
          "isMandatory": true,
          "regex": "^[0-9]{10}$",
          "allowedRegex": "^[0-9]{0,10}$"
        },
        "city": {
          "isMandatory": false,
          "regex": "^[a-zA-Z ]{0,}$",
          "allowedRegex": "^[a-zA-Z ]{0,24}$"
        },
        "pincode": {
          "isMandatory": false,
          "regex": "^[0-9]{0,6}$",
          "allowedRegex": "^[0-9]{0,6}$"
        },
        "default": {
          "isMandatory": false,
          "regex": "^(.){0,}$",
          "allowedRegex": "^(.){0,40}$"
        },
      };

    constructor() {
        this.displayJamp = new EventEmitter();
        this.baseHref = environment.baseHref;
    }

    displayJampScreen(state: boolean) {
        this.displayJamp.emit(state);
    }

}