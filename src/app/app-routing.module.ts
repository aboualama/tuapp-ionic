import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

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
    {
        path: 'about',
        loadChildren: './page/about/about.module#AboutPageModule'
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
    /*  {
          path: 'city',
          loadChildren: './page/city/city.module#CityPageModule'
      },*/
    {
        path: 'addservice',
        loadChildren: './page/addservice/addservice.module#AddservicePageModule'
    },
    {
        path: 'about',
        loadChildren: './page/about/about.module#AboutPageModule'
    },
    {
        path: 'service',
        loadChildren: './page/service/service.module#ServicePageModule'
    },
    {
        path: 'bookedservice',
        loadChildren: './page/bookedservice/bookedservice.module#BookedservicePageModule'
    },
    {
        path: 'ui-element',
        children: [{
            path: '',
            loadChildren: './page/ui-element/ui-element.module#UiElementPageModule'
        },
            {
                path: 'button',
                loadChildren: './page/ui-element/button/button.module#ButtonPageModule'
            },
            {
                path: 'action-sheet',
                loadChildren: './page/ui-element/action-sheet/action-sheet.module#ActionSheetPageModule'
            },
            {
                path: 'alert',
                loadChildren: './page/ui-element/alert/alert.module#AlertPageModule'
            },
            {
                path: 'badge',
                loadChildren: './page/ui-element/badge/badge.module#BadgePageModule'
            },
            {
                path: 'card',
                loadChildren: './page/ui-element/card/card.module#CardPageModule'
            },
            {
                path: 'checkbox',
                loadChildren: './page/ui-element/checkbox/checkbox.module#CheckboxPageModule'
            },
            {
                path: 'chip',
                loadChildren: './page/ui-element/chip/chip.module#ChipPageModule'
            },
            {
                path: 'datetime',
                loadChildren: './page/ui-element/datetime/datetime.module#DatetimePageModule'
            },
            {
                path: 'input',
                loadChildren: './page/ui-element/input/input.module#InputPageModule'
            },
            {
                path: 'list',
                loadChildren: './page/ui-element/list/list.module#ListPageModule'
            },
            {
                path: 'modal',
                loadChildren: './page/ui-element/modal/modal.module#ModalPageModule'
            },
            {
                path: 'radio',
                loadChildren: './page/ui-element/radio/radio.module#RadioPageModule'
            },
            {
                path: 'range',
                loadChildren: './page/ui-element/range/range.module#RangePageModule'
            },
            {
                path: 'searchbar',
                loadChildren: './page/ui-element/searchbar/searchbar.module#SearchbarPageModule'
            },
            {
                path: 'segment',
                loadChildren: './page/ui-element/segment/segment.module#SegmentPageModule'
            },
            {
                path: 'slide',
                loadChildren: './page/ui-element/slide/slide.module#SlidePageModule'
            },
            {
                path: 'toast',
                loadChildren: './page/ui-element/toast/toast.module#ToastPageModule'
            },
            {
                path: 'toggle',
                loadChildren: './page/ui-element/toggle/toggle.module#TogglePageModule'
            }]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
