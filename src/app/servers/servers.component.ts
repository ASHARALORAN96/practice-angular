import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowDisabled: boolean = false;
  createNewServer: string = 'there is no server created';
  inputDataForServerName: string = '';
  servers: string[] = [];
  showNewServer : boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowDisabled = true;
    }, 2000);
  }

  ngOnInit(): void {}

  addServer(e: Event) {
    e.preventDefault();
    this.showNewServer = true;
    this.servers.push(this.inputDataForServerName);
    this.createNewServer = 'server is created ' + this.inputDataForServerName;
  }

  inputEventHandler(event: any) {
    this.inputDataForServerName = (<HTMLInputElement>event.target).value;
  }
}
