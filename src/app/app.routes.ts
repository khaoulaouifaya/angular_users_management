import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    { path: 'users', component: IndexComponent },
    { path: '', component: IndexComponent },
    { path: 'add', component: AddUserComponent },
    { path: '**', component: NotfoundComponent } // Route wildcard pour les URL non définies
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
