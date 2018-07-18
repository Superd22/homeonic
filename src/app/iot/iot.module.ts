import { IonicModule } from 'ionic-angular';
import { IOTAPIService } from './services/iot-api.service';
import { IOTService } from './services/iot.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { IOTRoomService } from './services/iot-rooms.service';
import { IOTItemComponent } from './components/iot-item/iot-item.component';
import { IOTActionService } from './services/iot-actions.service';



@NgModule({
    declarations: [
        IOTItemComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        IOTItemComponent
    ],
    bootstrap: [],
    entryComponents: [
    ]
})
export class IOTModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: IOTModule,
            providers: [
                IOTService,
                IOTAPIService,
                IOTActionService,
                IOTRoomService
            ]
        }
    }
}
