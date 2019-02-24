import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

    private hostname = environment.backendUrl;

    constructor(private _http: HttpClient) {

    }

    makeGet(url: string): Observable<any> {
        return this._http.get(this.hostname + url);
    }

    makePost(url: string, body: any): Observable<any> {
        const headers = {'Content-Type': 'application/json'};
        const options = {
            headers: headers
        };

        return this._http.post(this.hostname + url, body, options);
    }
}