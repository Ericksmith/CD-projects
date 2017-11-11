import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo mailer';
  emails = [
    {
      email: "bill@gates.com",
      importance: true,
      subject: "Just switched to linux",
      content: "It's way better"
    },
    {
      email: "john@cena.com",
      importance: false,
      subject: "hi",
      content: "hi"
    },
    {
      email: "prince@nigeria",
      importance: true,
      subject: "Need help",
      content: "Need a small wire transfer for..."
    },
    {
      email: "spam@spammer.com",
      importance: false,
      subject: "Blahblah",
      content: "Blahblah blaaahhh"
    },
  ];
}
