import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  public branchs: any;
  public cities: any;
  public cityId: any;
  
  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) { }

  

  async ngOnInit() {
    this.getdata();
  }
  
  async getdata() { 
    // Get All Cities
    const allcities = await API.graphql(graphqlOperation(Queries.listCitys));  
    this.cities = await allcities.data.listCitys.items ; 
    console.log(this.cities);

    // Get All Branchs
    // const allbranchs = await API.graphql(graphqlOperation(Queries.listBranchs));  
    // this.branchs = await allbranchs.data.listBranchs.items ; 
    // console.log(this.branchs); 

 
    // Get All Branchs in selected City
    const cityId  = this.activatedRoute.snapshot.paramMap.get('cityid'); 
    const city    = await API.graphql(graphqlOperation(Queries.getCity , { id : cityId }));   
    this.branchs  = await city.data.getCity.branchs.items; 
    console.log(city);  
    console.log(this.branchs);  

  }



  // create Branch
  createBranch = async (form: { value: { branch: any; open_time: any; close_time: any; cityname: any; }; }) => { 
    event.preventDefault()
    const  branch = {
      branch :  form.value.branch,
      open_time :  form.value.open_time,
      close_time :  form.value.close_time,
      branchCityId :  form.value.cityname,
    };
    await API.graphql(graphqlOperation(mutations.createBranch , { input: branch }));
    this.branchs.push(branch); 
    console.log(branch); 
  } 
  


  // remove Branch
  removeBranch = async (branch: any , i: any) => {   
  if (i > -1) {
    this.branchs.splice(i, 1);
  }  
  const BranchId = branch.id;
  await API.graphql(graphqlOperation(mutations.deleteBranch , { input: { id : BranchId } })); 
  console.log(branch); 
  } 


  // remove Branch
  selectBranch = async (branchid: any) => {    
    this.router.navigate(['service/' + branchid])  
    } 
   
  }