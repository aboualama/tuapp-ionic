import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {


  public services: any;
  public branchs: any;

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) { }
 
  async ngOnInit() {
    this.getdata();
  }
  
  async getdata() { 
    // Get All Branchs to select branch when create new service
    const allbranchs = await API.graphql(graphqlOperation(Queries.listBranchs));  
    this.branchs = await allbranchs.data.listBranchs.items ; 
    console.log(this.branchs);   
  }
   
  // create Service
  createService = async (form: { value: { servicetitle: any; serviceprice: any; branchname: any; }; }) => { 
    event.preventDefault()
    const  service = {
      title : form.value.servicetitle,
      price : form.value.serviceprice,
      serviceBranchId :  form.value.branchname,
    };
    await API.graphql(graphqlOperation(mutations.createService , { input: service }));  
    this.router.navigate(['service'])  
  } 
} 
  
