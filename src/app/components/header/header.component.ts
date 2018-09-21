import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent {
  constructor(private storageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.storageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.storageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
