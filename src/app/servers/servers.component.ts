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
  newServerContent: string;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.newServerContent = '';
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push({
      type: 'server',
      name: this.serverName,
      content: this.newServerContent
    });
    this.serverCreationstatus = `Server was created! Name is ${this.serverName}`;
  }

  onAddBlueprint() {
    this.serverCreated = true;
    this.servers.push({
      type: 'blueprint',
      name: this.serverName,
      content: this.newServerContent
    });
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
