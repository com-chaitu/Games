import { Injectable } from "@angular/core";
import { RegistrationModel } from "../model/registration.model";

@Injectable()
export class RegistrationService {
    registrationData: RegistrationModel;
}