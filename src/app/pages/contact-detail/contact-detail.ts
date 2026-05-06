import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact-list/contact-list';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.scss',
})
export class ContactDetail {
  @Input({ required: true }) contact!: Contact;
  @Output() closeDetail: EventEmitter<void> = new EventEmitter();

  closeDetails() : void {
    this.closeDetail.emit();
  }
}
