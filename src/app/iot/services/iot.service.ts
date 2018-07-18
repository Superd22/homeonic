import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class IOTService {

    public _serverStatus = new BehaviorSubject<boolean>(false);
    public _serverurl = `https://31de474d.ngrok.io/`;


    constructor(
        protected _http: HttpClient
    ) {

    }

    /**
     * Check if the IOT server is alive with the sound of silence
     */
    public checkServer() {
        this._http.get(`${this._serverurl}`).subscribe((data) => {
            if (data === "OK") this._serverStatus.next(true);
            else this._serverStatus.next(false);
        });
    }

}