import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { MembersComponent } from 'src/app/pages/members/members.component';
import { ReportComponent } from 'src/app/pages/report/report.component';
import { HealthTipsComponent } from 'src/app/pages/health-tips/health-tips.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },

    { path: 'members',           component: MembersComponent },
    { path: 'report',           component: ReportComponent },
    { path: 'tips',           component:  HealthTipsComponent},
];
