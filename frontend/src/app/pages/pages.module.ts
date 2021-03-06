import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

// Pages Routes
import { PAGES_ROUTES } from './pages.routes';
import { DonutGraphComponent } from '../components/donut-graph/donut-graph.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UploadModalComponent } from '../components/upload-modal/upload-modal.component';
import { HospitalsComponent } from './hospitals/hospitals.component';

@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graphics1Component,
		DonutGraphComponent,
		AccountSettingsComponent,
		PromisesComponent,
		RxjsComponent,
		ProfileComponent,
		UsersComponent,
		UploadModalComponent,
		HospitalsComponent
	],
	exports: [PagesComponent, DashboardComponent, ProgressComponent, Graphics1Component],
	imports: [PAGES_ROUTES, SharedModule, FormsModule, ChartsModule, PipesModule, CommonModule]
})
export class PagesModule {}
