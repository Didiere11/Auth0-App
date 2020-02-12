import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { RotegidaComponent } from './components/rotegida/rotegida.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'precios', component:PreciosComponent},
  {path: 'protegida',
  component:RotegidaComponent,
  canActivate:[AuthGuard]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
