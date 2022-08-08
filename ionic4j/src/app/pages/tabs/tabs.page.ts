import { Component } from '@angular/core';

import { AccountService } from '../../services/auth/account.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  admin: boolean;

  constructor(private accountService: AccountService) {
    this.accountService.hasAuthority('ROLE_ADMIN').then(res => {
      this.admin = res;
    });
  }

  ngOnInit() {}
}
