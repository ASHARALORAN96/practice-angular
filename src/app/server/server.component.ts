import { Component } from "@angular/core";
//Decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
   styleUrls: ['server.component.css']
})
export class ServerComponent {
    readonly clientID : number = 10;
    clientStatus : string = 'offline'


    constructor(){
    this.clientStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    getStatus () {
        return this.clientStatus === 'online' ? 'green': 'red'
    }
    getClinetStatus(){
        return this.clientStatus
    }
    ifOnline(){
        this.clientStatus === 'online'
    }
}