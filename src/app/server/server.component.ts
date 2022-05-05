import { Component } from "@angular/core";
//Decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    readonly clientID : number = 10;
    private clientStatus : string = 'offline'


    getClientStatus() : string{
        return this.clientStatus
    }
}