import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child2aComponent } from './menu/child2a/child2a.component';
import { Child2bComponent } from './menu/child2b/child2b.component';

const Routes: Routes = [
    { path: '', component: ParentComponent},
    { path: 'child', component: ChildComponent},
    { path: 'child2', component: Child2Component},
    { path: 'child2a', component: Child2aComponent},
    { path: 'child2b', component: Child2bComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }