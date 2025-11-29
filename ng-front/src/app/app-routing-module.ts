import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';
import { Appareil } from './core/models/appareil.model';
import { AppareilDetail } from './components/appareil-detail/appareil-detail';

const routes: Routes = [
  { path: '', component: Home },  // Default route (no params)
  { path: 'login', component: Login },  // Simple route (no params)
  { path: 'contact', component: Contact },  // Simple route (no params)
  // Route params: ':id' placeholder for dynamic ID passing/retrieval
  { path: 'appareil/:id', component: AppareilDetail },
  { path: '**', redirectTo: '' }  // Wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
