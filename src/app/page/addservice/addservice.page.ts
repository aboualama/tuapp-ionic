import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {graphqlOperation, API} from 'aws-amplify';
import {Storage} from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import {forEach} from '@angular-devkit/schematics';
import {resolve} from 'dns';
import {listServices} from '../../../graphql/queries';


@Component({
    selector: 'app-addservice',
    templateUrl: './addservice.page.html',
    styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {

    image: String | Object;

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

    // create Service
    createService = async (form: { value: { servicetitle: any; serviceprice: any; duration: any; description: any; }; }) => {
        console.log(this.image);
        event.preventDefault();
        const service = {
            title: form.value.servicetitle,
            price: form.value.serviceprice,
            duration: form.value.duration,
            description: form.value.description,
            image: this.image,

        };
        await API.graphql(graphqlOperation(mutations.createService, {input: service}));

        this.router.navigate(['service']);
    };

    onImagePreviewLoaded($event: string) {

    }

    onImageSelected($event: string) {

    }

    /* webSelectImage(element) {
         if (element) {
             console.log(element);
             const file = element;
             this.saveImageInAmplify(file.name, file);
         }
     }*/

    onImagePicked(result1) {
        console.log(result1);
        Storage.list('pics').then((result2: any) => {
            console.log(result2);
        });
    }

    onImageLoaded(event) {
        console.log('image.loaded:');
        console.log(event);
    }

    async onImageUploaded(event) {
        console.log('image.uploaded:');

        await Storage.get(event.key).then(data => {
            console.log('promise:', data);
            this.image = data;
        });

    }

    onAlbumImageSelected(event) {
        console.log(event);
    }
}

