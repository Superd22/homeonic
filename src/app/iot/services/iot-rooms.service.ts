import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IOTAPIService } from "./iot-api.service";
@Injectable()
export class IOTRoomService {

    public rooms = new BehaviorSubject<Room[]>([])
    public activeRoom = new BehaviorSubject<DetailRoom>(null);

    constructor(
        protected _api: IOTAPIService
    ) {
    }

    public getRooms() {
        this._api.get<Room[]>("rooms").subscribe((rooms) => {
            this.rooms.next(rooms);
        });
    }

    public getRoom(roomId: string) {
        this.activeRoom.next(null);
        this._api.get<DetailRoom>(`room/${roomId}`).subscribe(room => {
            console.log(room);
            this.activeRoom.next(room)
        });
    }

}

export interface DetailRoom {

}

export interface Room {
    id: string;
    itemsNumber: number;
    name: string;
}