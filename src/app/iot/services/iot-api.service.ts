import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class IOTAPIService {

    public serverurl = `https://31de474d.ngrok.io/`;


    constructor(
        protected _http: HttpClient
    ) {

    }

    public get<T>(path: string) {
        return this._http.get<T>(`${this.serverurl}${path}`).map((data) => {
            return data;
        });
    }

    public post<T>(path: string, body: any) {
        return this._http.post<T>(`${this.serverurl}${path}`, body).map((data) => {
            return data;
        });
    }


}