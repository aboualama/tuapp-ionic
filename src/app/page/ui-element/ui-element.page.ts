import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.page.html',
  styleUrls: ['./ui-element.page.scss'],
})
export class UiElementPage implements OnInit {

  list_page = [{
    name: 'Action Sheet',
    path: 'action-sheet',
    component: ''
  },{
    name: 'Alert',
    path: 'alert',
    component: ''
  },{
    name: 'Badge',
    path: 'badge',
    component: ''
  },{
    name: 'Button',
    path: 'button',
    component: ''
  },{
    name: 'Card',
    path: 'card',
    component: ''
  },{
    name: 'Checkbox',
    path: 'checkbox',
    component: ''
  },{
    name: 'Chip',
    path: 'chip',
    component: ''
  },{
    name: 'Datetime',
    path: 'datetime',
    component: ''
  },{
    name: 'Input',
    path: 'input',
    component: ''
  },{
    name: 'List',
    path: 'list',
    component: ''
  },{
    name: 'Modal',
    path: 'modal',
    component: ''
  },{
    name: 'Radio',
    path: 'radio',
    component: ''
  },{
    name: 'Range',
    path: 'range',
    component: ''
  },{
    name: 'Searchbar',
    path: 'searchbar',
    component: ''
  },{
    name: 'Segment',
    path: 'segment',
    component: ''
  },{
    name: 'Slide',
    path: 'slide',
    component: ''
  },{
    name: 'Toast',
    path: 'toast',
    component: ''
  },{
    name: 'Toggle',
    path: 'toggle',
    component: ''
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
