import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MessagesComponent } from './messages/messages.component';
import { PastasComponent } from './pastas/pastas.component';
import { ContentComponent } from './content/content.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AddPastaComponent } from './add-pasta/add-pasta.component';
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'home', component: ContentComponent },
  { path: 'account', component: AccountComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'pastas', component: PastasComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'home/add', component: AddPastaComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
