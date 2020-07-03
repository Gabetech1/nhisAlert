import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MembersComponent } from './pages/members/members.component';
import { ReportComponent } from './pages/report/report.component';
import { HealthTipsComponent } from './pages/health-tips/health-tips.component';
import { MaterialsModule } from './shared/materials/materials.module';
import { TableService } from './services/table.service';
import { HealthTipDialogComponent } from './pages/_materialComponents/health-tip-dialog/health-tip-dialog.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MaterialsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MembersComponent,
    ReportComponent,
    HealthTipsComponent,
    HealthTipDialogComponent
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
