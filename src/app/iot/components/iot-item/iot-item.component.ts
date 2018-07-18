import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IOTActionService } from '../../services/iot-actions.service';

@Component({
    selector: 'iot-item',
    templateUrl: 'iot-item.component.html'
})
export class IOTItemComponent {

    @Input() item: Item;

    protected _fanStatus = new BehaviorSubject(-1);

    constructor(
        protected actionService: IOTActionService,
    ) {
    }

    initFan() {
        this.actionService.doAction(this.item.actions.find((action) => action.name.indexOf('Get') > -1).id)
            .subscribe((data: any) => {
                this._fanStatus.next(data.status);
            });
    }

    shutterMove(direction: number) {
        this.actionService.doAction(this.item.actions[0].id, [direction], [this.item.id]).subscribe((data) => {
            console.log(data);
        });
    }

    fanSpeed(speed: number) {
        this._fanStatus.next(Number(speed));
        this.actionService.doAction(this.item.actions.find((action) => action.name.indexOf('Set') > -1).id, { status: speed })
            .subscribe((data: any) => {
                if (data && data.status)
                    this._fanStatus.next(data.status);
            });
    }

    fanSpeedIs(speed: number) {
        return speed == this._fanStatus.getValue();
    }
}

export class Item {
    id: string;
    actions: { id: string, name: string }[]
}