import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowDisabled: boolean = false;
  createNewServer: string = 'there is no server created';
  inputData : string = ''
  showNewServer = false
  constructor() {
    setTimeout(() => {
      this.allowDisabled = true;
    }, 2000);
  }

  ngOnInit(): void {}

  addServer() {
    this.showNewServer=true
    this.createNewServer = 'server is created '+ this.inputData;
  }
  inputEventHandler(event : any){
    this.inputData = (<HTMLInputElement>event.target).value;
  }

}
