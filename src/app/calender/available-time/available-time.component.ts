import {Component, Input, OnInit} from '@angular/core';
import {AppId} from '../../AppId/Id';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';

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
        console.log('settings1');
        console.log(this.setting1);
        this.id = this.setting1.id;
        this.startTime = this.setting1.start_time;
        this.endTime = this.setting1.end_time;
        this.offset = this.setting1.calender_offset;
    }

    updateSetting = async (form: { value: { startTime: any; endTime: any; offset: any; }; }) => {
        event.preventDefault();
        const setting = {
            id: this.id,
            // start_time: moment(form.value.start_time).format('HH:mm').toString(),
            // end_time: moment(form.value.end_time).format('HH:mm').toString(),
            start_time: form.value.startTime,
            end_time: form.value.endTime,
            // start_time: moment(form.value.start_time).format('LT').toString(),
            // end_time: moment(form.value.end_time).format('LT'),
            calender_offset: form.value.offset,
            settingAppId: AppId,
            appId: AppId
        };
        if (this.id == null || this.id == '') {
            delete setting.id;
            await API.graphql(graphqlOperation(mutations.createSetting, {input: setting}));
            return;
        }
        console.log(setting);
        await API.graphql(graphqlOperation(mutations.updateSetting, {input: setting}));
    };

    delete = async () => {
        await API.graphql(graphqlOperation(mutations.deleteSetting, {input: {id: this.id}}));

    };

}
