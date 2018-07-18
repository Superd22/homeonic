import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IOTAPIService } from "./iot-api.service";

@Injectable()
export class IOTActionService {

    constructor(
        protected _api: IOTAPIService
    ) {
    }

    public doAction(actionId: string, params?: any, targets?: any[]) {
        return this._api.post(`action/${actionId}/trigger`, { params, targets }).map((action) => {
            return action;
        });
    }

}
