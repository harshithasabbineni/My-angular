import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Product } from './product/product';
import { Error } from './error/error';
import { Home } from './home/home';
import { P1 } from './product/p1/p1';
import { P2 } from './product/p2/p2';
export const routes: Routes = [
  {path:'',component:Home,pathMatch:'full'},
  {path:'login',component:Login},
  {path:'product',component:Product,children:[
  {path:'p1',component:P1},
  {path:'p2',component:P2},
]},
  {path:'**',component:Error},
];
