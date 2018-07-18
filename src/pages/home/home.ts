import { RoomPage } from './../room/room';
import { Room } from './../../app/iot/services/iot-rooms.service';
import { IOTService } from '../../app/iot/services/iot.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IOTRoomService } from '../../app/iot/services/iot-rooms.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public iotService: IOTService,
        public roomService: IOTRoomService
    ) {
        this.iotService.checkServer();
        this.roomService.getRooms();
    }

    public goToRoom(room: Room) {
        this.navCtrl.setRoot(RoomPage, { roomId: room.id });
    }

}
