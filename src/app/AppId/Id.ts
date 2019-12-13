// import { OnInit} from '@angular/core';
// import {graphqlOperation, API} from 'aws-amplify';
// import * as Queries from '../../graphql/queries';
// import { ActivatedRoute, Router } from '@angular/router';


export const AppId = '30';



// export const AppId =  getAppId();
//     function getAppId() {
//         return '1';
//     }


// export class slot implements OnInit {
//     [x: string]: any;

//     public offset: any;
//     public duration: any;
//     constructor() { }

//     async ngOnInit() {

//         if(this.offset < this.duration) {
//             return this.offset;
//         }else{
//             return this.duration;
//         }

//         console.log(this.duration);
//     }

//     // Get Setting calender_offset
//     async calender_offset(){
//         const App_Id = await API.graphql(graphqlOperation(Queries.getApp, {id: AppId}));
//         this.calender_offset = await App_Id.data.getApp.settings.items[0].calender_offset;
//         console.log(this.duration);
//     }

//     // Get Service duration
//     async service_duration(){
//         const serviceId = this.activatedRoute.snapshot.paramMap.get('myid');
//         const service = await API.graphql(graphqlOperation(Queries.getService, {id: serviceId}));
//         this.duration = await service.data.getService.duration;
//     }

// }
