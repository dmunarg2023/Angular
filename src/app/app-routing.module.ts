import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { serieListComponent } from './serie-list/serie-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [serieListComponent],
 declarations: [serieListComponent]
})
export class AppRoutingModule { }
