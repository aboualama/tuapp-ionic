import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AppId} from '../../AppId/Id';

import {graphqlOperation, API} from 'aws-amplify';
import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import * as moment from 'moment/moment';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    public settings: any;
    public moment: any;

    constructor(private modalController: ModalController, private router: Router) {
        this.moment = moment();
    }

    async ngOnInit() {
        this.settings = (await API.graphql(graphqlOperation(Queries.listSettings))).data.listSettings.items;
        console.log(this.settings);
      /*  console.log(setting);
        this.settingid = setting.data.getSetting.id;
        this.start_time = setting.data.getSetting.start_time;
        this.end_time = setting.data.getSetting.end_time;
        this.calender_offset = setting.data.getSetting.calender_offset;*/
    }


    // Update Setting
    updateSetting = async (form: { value: { start_time: any; end_time: any; calender_offset: any; }; }) => {
        event.preventDefault();
        const setting = {
            //   id: this.settingid,
            // start_time: moment(form.value.start_time).format('HH:mm').toString(),
            // end_time: moment(form.value.end_time).format('HH:mm').toString(),
            start_time: form.value.start_time,
            end_time: form.value.end_time,
            // start_time: moment(form.value.start_time).format('LT').toString(),
            // end_time: moment(form.value.end_time).format('LT'),
            calender_offset: form.value.calender_offset,
            settingAppId: AppId,
        };
        console.log(setting);
        await API.graphql(graphqlOperation(mutations.createSetting, {input: setting}));
        this.router.navigate(['service']);
    };


    normalizzaTime(data) {
        return moment(data).format('HH:mm').toString();
    }
}
