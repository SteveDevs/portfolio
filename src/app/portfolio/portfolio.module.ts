import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [PortfolioComponent, PortfolioItemComponent]
})
export class PortfolioModule { }
