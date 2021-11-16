import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from "./pages-routing.module";
import { ComponentsModule } from "../components/components.module";

import { DetalhesComponent } from './detalhes/detalhes.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    DetalhesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
