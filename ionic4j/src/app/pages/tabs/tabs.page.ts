import { Component } from '@angular/core';

import { AccountService } from '../../services/auth/account.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  admin: boolean;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      if (account.firstName == 'Administrator') {
        this.admin = true;
      } else {
        this.admin = false;
      }
    });
  }
}
