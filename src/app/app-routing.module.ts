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
        path: 'setting',
        loadChildren: './page/settings/settings.module#SettingsPageModule'
    }, {
        path: 'about',
        loadChildren: './page/about/about.module#AboutPageModule'
    },
    {
        path: 'appointment/:myid',
        loadChildren: './page/appointment/appointment.module#AppointmentPageModule'
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

    { path: 'usermanagment', loadChildren: './page/usermanagment/usermanagment.module#UsermanagmentPageModule' },

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
        ]
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
