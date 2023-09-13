import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './mailFontpage/main-page/main-page.component';
import { ComposemailComponent } from './composemail/composemail.component';
import { HeadersearchComponent } from './headersearch/headersearch.component';

const routes: Routes = [
  {path:'', redirectTo:'/mail', pathMatch:'full'},
  {path:'mail', component: MainPageComponent},
  {path:'compose',component: ComposemailComponent},
  {path:'headersearch', component:HeadersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
