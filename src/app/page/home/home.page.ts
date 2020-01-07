import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



 
  Logout = async () => {    
    await Auth.signOut();  
  } 



  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },    
    {
      title: 'Add Service',
      url: '/addservice',
      icon: 'add'
    } ,   
    {
      title: 'Services',
      url: '/service',
      icon: 'bowtie'
    } ,   
    {
      title: 'Booked Service',
      url: '/bookedservice',
      icon: 'checkbox-outline'
    } ,    
    {
      title: 'User Management',
      url: '/usermanagment',
      icon: 'users'
    },   
    {
      title: 'Login & Register',
      url: '/login',
      icon: 'log-in'
    },
    // {
    //   title: 'City',
    //   url: '/city',
    //   icon: 'pin'
    // } 
  ];
}
