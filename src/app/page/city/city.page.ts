import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { graphqlOperation, API } from 'aws-amplify';

import * as Queries from '../../../graphql/queries'; 
import * as mutations from '../../../graphql/mutations'; 

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {


  public citys: any;

  constructor(private router: Router) { }
 
  async ngOnInit() {
    // Get All Citys
    const allcitys = await API.graphql(graphqlOperation(Queries.listCitys));  
    this.citys = await allcitys.data.listCitys.items ; 
    console.log(this.citys);

  }


  // remove City
  removeCity = async (city: any , i: any) => {   
    if (i > -1) {
      this.citys.splice(i, 1);
    }  
    const cityId = city.id;
    await API.graphql(graphqlOperation(mutations.deleteCity , { input: { id : cityId } })); 
    console.log(city); 
    } 
  
  
  // select City
  selectCity = async (cityid: any) => {    
    this.router.navigate(['branch/' + cityid ])  
    } 
    
}
