import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationstatus: string = 'No server was created!';
  serverName: string = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationstatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
