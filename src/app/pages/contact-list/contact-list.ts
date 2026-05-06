import { Component, inject, Signal } from '@angular/core';
import { ContactCard } from '../contact-card/contact-card';
import { CommonModule } from '@angular/common';
import { ContactDetail } from "../contact-detail/contact-detail";
import { ContactsService } from '../../service/contacts.service';

export interface Contact {
  name: string;
  email: string;
  estado: string;
  direccion: string;
  telefono: string;
  edad: number;
  favorito: boolean;
}

@Component({
  selector: 'app-contact-list',
  imports: [ContactCard, CommonModule, ContactDetail],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {
  private readonly contactsSignal: ContactsService = inject(ContactsService);

  readonly contactsList: Signal<Contact[]> = this.contactsSignal.getContacts();
  readonly selectedContact: Signal<Contact | null> = this.contactsSignal.getSelectedContact();
  readonly totalContacts: Signal<number> = this.contactsSignal.totalContacts;
  readonly totalFavorites: Signal<number> = this.contactsSignal.totalFavorites;

  setSelectedContact(contact: Contact): void {
    this.contactsSignal.selectContact(contact);
  }

  emptySelectedContact(): void {
    this.contactsSignal.clearSelectedContact();
  }

  addNewContact(): void {
    this.contactsSignal.addContact({
      name: 'Nuevo Contacto',
      email: `nuevo${Date.now()}@gmail.com`,
      estado: 'Soltero',
      direccion: 'Ambato',
      telefono: '0987698005',
      edad: 40,
      favorito: false
    });
  }

  toggleFavorite(updatedContact: Contact): void {
    this.contactsSignal.updateContact(updatedContact);
  }

}
