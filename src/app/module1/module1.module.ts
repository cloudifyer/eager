import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Comp1Component } from './comp1/comp1.component';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
