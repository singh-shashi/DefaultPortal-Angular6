import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchresultComponent } from './searchresult.component';

const routes: Routes = [{
  path: '',
  component: SearchresultComponent,
  data: {pageTitle: 'Requests'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchresultRoutingModule { }