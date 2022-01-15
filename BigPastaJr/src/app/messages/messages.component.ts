import { Component, OnInit } from '@angular/core';
import {faEnvelopeOpenText, faEnvelope} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  faText = faEnvelopeOpenText;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
