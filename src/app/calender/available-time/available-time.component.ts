import {Component, Input, OnInit} from '@angular/core';
import {AppId} from '../../AppId/Id';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-available-time',
    templateUrl: './available-time.component.html',
    styleUrls: ['./available-time.component.scss'],
})
export class AvailableTimeComponent implements OnInit {

    @Input() setting1: any;
    @Input() i: any;
    @Input() settings: any;
    id: any; 
    startTime: any;
    endTime: any;
    offset: any;


    constructor(private router: Router) {
        /*    this.setting1 = setting1;
            this.id = this.setting1.id;
            this.startTime = this.setting1.startTime;
            this.endTime = this.setting1.endTime;
            this.offset = this.setting1.offset;*/

    }

    AfterContentInit() {

    }

    ngOnInit() {
        console.log('settings1');
        console.log(this.setting1);
        this.id = this.setting1.id;
        this.startTime = this.setting1.start_time;
        this.endTime = this.setting1.end_time;
        this.offset = this.setting1.calender_offset;
    }

    updateSetting = async (form: { value: { startTime: any; endTime: any; offset: any; }; }) => {
        
        const setting = {
            id: this.id,
            start_time: form.value.startTime,
            end_time: form.value.endTime,
            calender_offset: form.value.offset,
            settingAppId: AppId,
            appId: AppId
        };
        if (this.id == null || this.id == '') {
            delete setting.id;
            await API.graphql(graphqlOperation(mutations.createSetting, {input: setting}));
            this.router.navigate(['service']);
        }
        console.log(setting);
        await API.graphql(graphqlOperation(mutations.updateSetting, {input: setting}));

        
        this.router.navigate(['service']);
    };

    delete = async () => {
        console.log(this.settings);
        if (this.i > -1) { 
            this.settings.splice(this.i, 1);
        }
        await API.graphql(graphqlOperation(mutations.deleteSetting, {input: {id: this.id}}));

    };

}
