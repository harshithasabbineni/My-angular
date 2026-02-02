import { Routes } from '@angular/router';
import { Login} from './login/login';
import { Product } from './product/product';
import { Search } from './search/search';
import { Error } from './error/error';
import { Home } from './home/home';
export const routes: Routes = [
  {path:"",component:Home,pathMatch:'full'},
  {path:'login',component:Login},
  {path:'product',component:Product},
  {path:'search',component:Search},
  {path:'**',component:Error},
];
