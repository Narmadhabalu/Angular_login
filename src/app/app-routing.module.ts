import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { AppComponent } from './app.component';
import { DasbboardComponent } from './dasbboard/dasbboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"comp1",component:Comp1Component},
  {path:'Dashboard',component:DasbboardComponent},
  {path:'Login',component:LoginComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
