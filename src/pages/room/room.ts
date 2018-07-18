import { IOTRoomService } from './../../app/iot/services/iot-rooms.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// @IonicPage({
//     name: 'room'
// })
@Component({
    selector: 'room',
    templateUrl: 'room.html',
})
export class RoomPage {
    public roomId: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public room: IOTRoomService,
    ) {
        this.roomId = navParams.get('roomId');
        room.getRoom(this.roomId);
    }

}
