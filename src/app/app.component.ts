import { Component } from '@angular/core';
import { Server } from 'stellar-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'demo-stellar';

	server: any;

	constructor() {
		this.server = new Server('https://horizon-testnet.stellar.org');
	}
}
