import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-available-time',
    templateUrl: './available-time.component.html',
    styleUrls: ['./available-time.component.scss'],
})
export class AvailableTimeComponent implements OnInit {

    @Input() setting1: any;
    id: any;
    startTime: any;
    endTime: any;
    offset: any;
    updateSetting;

    constructor() {
        /*    this.setting1 = setting1;
            this.id = this.setting1.id;
            this.startTime = this.setting1.startTime;
            this.endTime = this.setting1.endTime;
            this.offset = this.setting1.offset;*/

    }

    AfterContentInit() {

    }

    ngOnInit() {

        this.id = this.setting1.id;
        this.startTime = this.setting1.startTime;
        this.endTime = this.setting1.endTime;
        this.offset = this.setting1.offset;
    }

}
