import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Product } from './product/product';
import { Error } from './error/error';
import { Home } from './home/home';
import { Search } from './search/search';
export const routes: Routes = [
  {path:'',component:Home,pathMatch:'full'},
  {path:'login',component:Login},
  {path:'search/id',title:"SearchID",component:Search},
  {path:'**',component:Error},
];
