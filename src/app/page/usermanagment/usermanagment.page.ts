import { Component, OnInit } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);

 

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.page.html',
  styleUrls: ['./usermanagment.page.scss'],
})
export class UsermanagmentPage implements OnInit {

  constructor() { }

  async ngOnInit() { 
    

        // Get User
        const user = await Auth.currentAuthenticatedUser();
        const {attributes} = user;
        console.log('user' , user); 
        console.log(attributes.sub); 

    this.getUsers();
  }


  async getUsers(){
   var params = {
     UserPoolId: 'us-east-1_qx18t6EDr',
     AttributesToGet: [
       'ATTRIBUTE_NAME',
     ],
     Filter: 'STRING_VALUE',
     Limit: 'NUMBER_VALUE',
     PaginationToken: 'STRING_VALUE'
   };
   
  var AWS = require('aws-sdk') ;
   return new Promise((resolve, reject) => {
     AWS.config.update({ region: 'us-east-1', 'accessKeyId': awsconfig.AWS_ACCESS_KEY_ID, 'secretAccessKey': awsconfig.AWS_SECRET_KEY });
     var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
     cognitoidentityserviceprovider.listUsers(params, (err, data) => {
       if (err) {
         console.log(err);
         reject(err)
       }
       else {
         console.log("data", data);
         resolve(data)
       }
     })
   });
 }


}
