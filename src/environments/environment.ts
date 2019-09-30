// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC85_KMLUvnylngcBcuc-sCAtMWKNEyKbk",
    authDomain: "lemon-d6637.firebaseapp.com",
    databaseURL: "https://lemon-d6637.firebaseio.com",
    projectId: "lemon-d6637",
    storageBucket: "lemon-d6637.appspot.com",
    messagingSenderId: "923603237424"
  },
  themes: [{
    name:'Teal',
    primary: '#574bcd',
    secondary: '#2999ad',
    tertiary: '#41e975',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Cyan',
    primary: '#276174',
    secondary: '#33c58e',
    tertiary: '#63fd88',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Indigo',
    primary: '#5c2774',
    secondary: '#335cc5',
    tertiary: '#637ffd',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Orange',
    primary: '#ea5a6f',
    secondary: '#de791e',
    tertiary: '#fccf3a',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Red',
    primary: '#74276c',
    secondary: '#c53364',
    tertiary: '#fd8263',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Purple',
    primary: '#274b74',
    secondary: '#8233c5',
    tertiary: '#e963fd',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Pink',
    primary: '#879af2',
    secondary: '#d3208b',
    tertiary: '#fda000',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Blue',
    primary: '#8929ad',
    secondary: '#436aac',
    tertiary: '#43b7b8',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Violet',
    primary: '#363553',
    secondary: '#903775',
    tertiary: '#e8458b',
    light: '#fff',
    medium: '#fff',
    dark: '#000'
  },{
    name:'Light',
    primary: '#555555',
    secondary: '#a1a1a1',
    tertiary: '#cccccc',
    light: '#e1e1e1',
    medium: '#7d7d7d',
    dark: '#111111'
  },{
    name:'Dark',
    primary: '#f2f2f2',
    secondary: '#a1a1a1',
    tertiary: '#cccccc',
    light: '#111111',
    medium: '#7d7d7d',
    dark: '#e1e1e1'
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
