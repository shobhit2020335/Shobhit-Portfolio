import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { ErrorComponent } from './error/error.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}