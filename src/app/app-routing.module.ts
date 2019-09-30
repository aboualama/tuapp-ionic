import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './page/home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren: './page/auth/auth.module#AuthPageModule'
  }, 
  // {
  //   path: 'branch/:cityid',
  //   loadChildren: './page/branch/branch.module#BranchPageModule'
  // },
  // {
  //   path: 'service/:branchid',
  //   loadChildren: './page/service/service.module#ServicePageModule'
  // },
  // {
  //   path: 'worker/:BranchId',
  //   loadChildren: './page/worker/worker.module#WorkerPageModule'
  // },
  {
    path: 'appointment/:myid',
    loadChildren: './page/appointment/appointment.module#AppointmentPageModule'
  },
  {
    path: 'city',
    loadChildren: './page/city/city.module#CityPageModule'
  },
  { 
    path: 'addservice', 
    loadChildren: './page/addservice/addservice.module#AddservicePageModule' 
  },   
  {
    path: 'service', 
    loadChildren: './page/service/service.module#ServicePageModule'
  },
  { 
    path: 'bookedservice', 
    loadChildren: './page/bookedservice/bookedservice.module#BookedservicePageModule' 
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
