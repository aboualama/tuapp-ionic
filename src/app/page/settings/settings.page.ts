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
    }

    normalizzaTime(data) {
        return moment(data).format('HH:mm').toString();
    }

    updateSeAddAvailabilitySlot() {
        this.settings.push({});
    }
}
