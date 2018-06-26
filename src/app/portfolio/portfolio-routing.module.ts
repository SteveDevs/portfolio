import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item//portfolio-item.component';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent, data: { title: extract('Portfolio') } },
    { path: 'portfolio-item', component: PortfolioItemComponent, data: { title: extract('PortfolioItem') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PortfolioRoutingModule { }
