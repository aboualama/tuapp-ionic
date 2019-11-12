import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-appointment-component',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
    @Input() service: any;
    @Input() clientID: any;
    @Input() slots: any;

    constructor() {
    }

    ngOnInit() {
        console.log('service', this.service);
        console.log('clientID', this.clientID);
        console.log('slots', this.slots);
    }

}
