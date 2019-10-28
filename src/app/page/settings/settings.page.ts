import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {ActivatedRoute} from '@angular/router';
import {ModalController} from '@ionic/angular';

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

  public myDate:string;
  public myTime:string;
  public myDateNTime:string;
  
  public serviceid: any; 
  public servicetitle: any; 
  public start_time: any;
  public end_time: any;
  public calender_offset: any; 

  public days: any[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  public moment: any;
  constructor(
    // private activatedRoute: ActivatedRoute, 
    private modalController: ModalController, 
    private router: Router) {
    this.moment = moment();
  }

  async ngOnInit() {

      // const serviceId = this.activatedRoute.snapshot.paramMap.get('id');
      // const service = await API.graphql(graphqlOperation(Queries.getService, {id: serviceId}));
      // this.serviceid = await service.data.getService.id; 
      // this.servicetitle = service.data.getService.title; 
      // this.start_time = service.data.getService.start_time;
      // this.end_time = service.data.getService.end_time
      // this.calender_offset = service.data.getService.calender_offset;
      // console.log(this.servicetitle);
      // console.log(this.start_time); 
  }



  // Update Service
  // updateService = async (form: { value: { start_time: any; end_time: any; calender_offset: any; }; }) => {
  //     event.preventDefault();
  //     const service = { 
  //         id: this.serviceid,
  //         start_time: moment(form.value.start_time).format('HH:mm').toString(),
  //         end_time: moment(form.value.end_time).format('HH:mm').toString(),
  //         calender_offset: form.value.calender_offset,
  //     };
  //     await API.graphql(graphqlOperation(mutations.updateService, {input: service}));
  //     this.router.navigate(['service']);
  // };    
}
