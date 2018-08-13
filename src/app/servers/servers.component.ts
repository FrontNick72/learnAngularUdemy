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
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationstatus = `Server was created! Name is ${this.serverName}`;
  }

  inputChanged(event: Event) {
    const valueInput = (<HTMLInputElement>event.target).value;
    this.allowNewServer = valueInput ? true : false;
  }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
