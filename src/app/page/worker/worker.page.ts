import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { ActivatedRoute, Router } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit { 
 
  public branchs: any;
  public workers: any; 
  public branchId: any;
  
  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController, private router: Router) { }
 

  async ngOnInit() {
    this.getdata();
  }
  
  async getdata() { 
    // Get All Branchs to select branch when create new worker
    const allbranchs = await API.graphql(graphqlOperation(Queries.listBranchs));  
    this.branchs = await allbranchs.data.listBranchs.items ; 
    console.log(this.branchs); 


    // Get All Workers in selected branch
    const branchId = this.activatedRoute.snapshot.paramMap.get('BranchId'); 
    const branch  = await API.graphql(graphqlOperation(Queries.getBranch , { id : branchId }));   
    this.workers = await branch.data.getBranch.workers.items; 
    // this.branchId = branchId;
    console.log(this.workers); 
  }


  // create  Worker
  createWorker = async (form: { value: { name: any; email: any; phone: any; branchname: any; }; }) => { 
    event.preventDefault()
    const  worker = {
      name :  form.value.name,
      email :  form.value.email,
      phone :  form.value.phone,
      workerBranchId :  form.value.branchname,
    };
    await API.graphql(graphqlOperation(mutations.createWorker , { input: worker }));

    if (worker.workerBranchId === this.branchId){
      this.workers.push(worker);  
    }
    console.log(worker); 
  } 
  


  // remove  Worker
  removeWorker = async (worker: any , i: any) => {   
  if (i > -1) {
    this.workers.splice(i, 1);
  }  
  const  WorkerId = worker.id;
  await API.graphql(graphqlOperation(mutations.deleteWorker , { input: { id :  WorkerId } })); 
  console.log(worker); 
  } 


  // remove  Worker
  selectWorker = async ( WorkerId: any) => {    
    this.router.navigate(['worker/' +  WorkerId])  
    } 
   
  }