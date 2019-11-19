import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {graphqlOperation, API} from 'aws-amplify';
import {Storage} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import {forEach} from '@angular-devkit/schematics';
import {resolve} from 'dns';
import {listServices} from '../../../graphql/queries';
import {AppId} from '../../AppId/Id';


@Component({
    selector: 'app-addservice',
    templateUrl: './addservice.page.html',
    styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {

    image: String | Object;
    durations = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

    constructor(private modalController: ModalController, private router: Router) {

        Storage.get('pics/localhost_8100_.png').then((result) => {
            console.log(result);
        });
        Storage.list('')
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    async ngOnInit() {
    }

    onImagePicked(event) {
        console.log(event);
    }

    // create Service
    createService = async (form: { value: { servicetitle: any; serviceprice: any; duration: any; description: any; }; }) => {
        console.log(this.image);
        event.preventDefault();
        const service = {
            serviceAppId: AppId,
            title: form.value.servicetitle,
            price: form.value.serviceprice,
            duration: form.value.duration,
            description: form.value.description,
            image: this.image,
            appId: AppId
        };
        await API.graphql(graphqlOperation(mutations.createService, {input: service}));
        this.router.navigate(['service']);
    };

    async onImageUploaded(event) {
        console.log('image.uploaded:');

        await Storage.get(event.key).then(data => {
            console.log('promise:', data);
            this.image = data;
        });

    }

    onImageLoaded($event: string) {
        console.log('ok');
    }
}

