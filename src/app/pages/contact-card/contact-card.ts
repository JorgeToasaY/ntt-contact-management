import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailMaskingPipePipe } from '../../pipes/email-masking-pipe-pipe';
import { Contact } from '../contact-list/contact-list';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule, EmailMaskingPipePipe],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  @Input({ required: true }) contact!: Contact;
  @Output() iclickFavorite: EventEmitter<Contact> = new EventEmitter();
  @Output() viewDetail: EventEmitter<Contact> = new EventEmitter();

  toggleFavorite() : void {
    const favoriteUpdate : Contact = { ...this.contact, favorito: !this.contact.favorito };
    this.iclickFavorite.emit(favoriteUpdate);
  }

  viewDetails() : void {
    this.viewDetail.emit(this.contact);
  }

}
