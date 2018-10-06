import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class BackendService {
    constructor(private _http: HttpClient) {

    }

    makeGet(url: string): Observable<any> {
        return this._http.get(url);
    }

    makePost(url: string, body: any): Observable<any> {
        return this._http.post(url, body);
    }
}