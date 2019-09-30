import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },  
    {
      title: 'Login & Register',
      url: '/login',
      icon: 'log-in'
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
    // {
    //   title: 'City',
    //   url: '/city',
    //   icon: 'pin'
    // } 
  ];
}
