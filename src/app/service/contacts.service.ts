import { computed, effect, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Contact } from '../pages/contact-list/contact-list';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private readonly contactsList: WritableSignal<Contact[]> = signal<Contact[]>([
    {
      name: 'Jorge Toasa',
      email: 'jorget@gmail.com',
      estado: 'Soltero',
      direccion: 'Ambato',
      telefono: '0987698798',
      edad: 30,
      favorito: true
    },
    {
      name: 'Medardo Yachimba',
      email: 'medardoy@gmail.com',
      estado: 'Casado',
      direccion: 'Quito',
      telefono: '0987698001',
      edad: 25,
      favorito: false
    },
    {
      name: 'Maria Toasa',
      email: 'mariat@gmail.com',
      estado: 'Soltero',
      direccion: 'Ambato',
      telefono: '0987698002',
      edad: 12,
      favorito: true
    },
    {
      name: 'Evelin Topanta',
      email: 'evelint@gmail.com',
      estado: 'Soltero',
      direccion: 'Ambato',
      telefono: '0987698003',
      edad: 35,
      favorito: false
    },
    {
      name: 'Julio Toasa',
      email: 'juliot@gmail.com',
      estado: 'Soltero',
      direccion: 'Ambato',
      telefono: '0987698004',
      edad: 70,
      favorito: false
    }
  ]);
  private readonly _selectedContact: WritableSignal<Contact | null> = signal<Contact | null>(null);

  readonly contacts: Signal<Contact[]> = this.contactsList.asReadonly();
  readonly selectedContact: Signal<Contact | null> = this._selectedContact.asReadonly();

  readonly totalContacts: Signal<number> = computed(() => this.contacts().length);
  readonly totalFavorites: Signal<number> = computed(
    () => this.contacts().filter((contact) => contact.favorito).length
  );

  // Backward compatibility in case old references still exist in templates/components.
  readonly totalContacst: Signal<number> = this.totalContacts;
  readonly totalFavorite: Signal<number> = this.totalFavorites;

  getContacts(): Signal<Contact[]> {
    return this.contacts;
  }

  addContact(newContact: Contact): void {
    this.contactsList.update((list) => [...list, newContact]);
  }

  updateContact(updatedContact: Contact): void {
    this.contactsList.update((list) =>
      list.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );
  }

  selectContact(contact: Contact): void {
    this._selectedContact.set(contact);
  }

  clearSelectedContact(): void {
    this._selectedContact.set(null);
  }

  getSelectedContact(): Signal<Contact | null> {
    return this.selectedContact;
  }

  constructor() {
    effect(() => {
      console.log('Se modificó la lista de contactos:', this.contacts());
      console.table(this.contacts());
    });
  }

}
