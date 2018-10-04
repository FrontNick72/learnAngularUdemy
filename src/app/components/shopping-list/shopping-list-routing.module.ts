import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const recipesRoutes: Routes = [
  {
    path: '', component: ShoppingListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class ShoppingListRoutingModule {

}
