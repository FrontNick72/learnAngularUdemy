import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { HomeComponent } from './home-component/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './components/recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './components/shared/data-storage.service';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth-guard.service';
import { RecipesModule } from './components/recipes/recipes.module';
import { SharedModule } from './components/shared/shared.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
