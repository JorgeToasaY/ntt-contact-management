# ClassProject

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 21.2.7.

---

## 🎯 Objetivo de la Actividad

Construir una aplicación Angular inicial que gestione una lista de contactos con componentes padre–hijo, enrutamiento básico, directivas estructurales y de atributo, manejo de eventos, un pipe personalizado y ahora **una vista de detalle utilizando Standalone Components y las directivas modernas Angular 17+ (`@for`, `@if`, `@switch`)**.

---

## 📌 Instrucciones Realizadas

### Tarea 1 (completada):

- Proyecto Angular creado y estructura explorada.
- Componentes: `contact-list` (padre) y `contact-card` (hijo).
- Arreglo estático de contactos en `contact-list`.
- Comunicación padre-hijo con property binding.
- Render de lista con **ngFor** y mensaje cuando está vacía con **ngIf**.
- Estilos dinámicos con `ngClass`/`ngStyle` según el estado del contacto o favorito.
- Botón y lógica para marcar como favorito (event binding).
- Pipe personalizado para enmascarar email.
- Uso del pipe en el hijo.
- Componentes Standalone y rutas para los principales.
- Ejemplo de código disponible abajo.

### Tarea 2 (completada):

- **Nuevo componente standalone**: `contact-detail` para mostrar los detalles completos de un contacto.
- **Botón "Ver detalles"** en cada tarjeta, que emite un evento hacia el padre.
- **Directivas modernas**:
  - Uso de `@for` en lugar de `*ngFor` para la lista de contactos.
  - Uso de `@if` para alternar vista de lista y vista de detalle.
  - Uso de `@switch` para mostrar mensajes diferentes según el estado u otras propiedades del contacto.
- Mejora de estilos para `contact-list`, `contact-card` y `contact-detail`:
  - Grid/flex layout para la lista.
  - Tarjeta de detalle elegante y profesional.
  - Botones visualmente consistentes, diferenciando "Favorito" de "Ver detalles".
- Navegación básica tipo "pantallas": sólo lista o sólo detalle según interacción.
- Estructura moderna y clara: fácil ampliación futura.

---

## 📦 Estructura del Proyecto (Actualizada)

```
src/
├── app/
│   ├── app.config.ts
│   ├── app.html
│   ├── app.ts
│   ├── app.routes.ts
│   ├── pages/
│   │   ├── contact-list/
│   │   │   ├── contact-list.ts
│   │   │   ├── contact-list.html
│   │   │   ├── contact-list.scss
│   │   │   └── contact-list.spec.ts
│   │   ├── contact-card/
│   │   │   ├── contact-card.ts
│   │   │   ├── contact-card.html
│   │   │   ├── contact-card.scss
│   │   │   └── contact-card.spec.ts
│   │   ├── contact-detail/
│   │   │   ├── contact-detail.ts
│   │   │   ├── contact-detail.html
│   │   │   ├── contact-detail.scss
│   │   │   └── contact-detail.spec.ts
│   ├── pipes/
│   │   └── email-masking-pipe-pipe.ts
│   │   └── email-masking-pipe-pipe.spec.ts
├── index.html
├── main.ts
├── styles.scss
```

---

## 🛠️ Uso y Desarrollo

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Servidor de desarrollo

```bash
ng serve
```

Abre [http://localhost:4200/](http://localhost:4200/) en el navegador.

### 3. Pruebas unitarias

```bash
ng test
```

---

## ✨ Funcionalidades Implementadas

### General:
- **Lista de contactos** con datos estáticos de ejemplo.
- **Vista dinámica** con mensaje si la lista está vacía.
- **Presentación dinámica**: cada tarjeta usa clases CSS según estado y favorito.

### Navegación lista / detalle:
- **Vista de detalle**: botón “Ver detalles” en cada tarjeta abre una pantalla con la información completa del contacto.
- **Alternancia entre lista y detalle** usando `@if`. Sólo una vista se muestra a la vez.
- **Mensaje variable** sobre el estado o favoritismo usando `@switch`.

### Directivas y estilos modernos:
- Directivas `@for`, `@if`, `@switch` (Angular 17+).
- **Pipe personalizado**: enmascara los emails en la vista.
- **Botones estilizados y diferenciados** para las acciones clave.

### Código organizado y componentes Standalone:
- Componentes legibles y fáciles de ampliar.
- Arquitectura recomendada moderna.

---

## 📋 Ejemplos clave del código

### Arreglo de contactos (`src/app/pages/contact-list/contact-list.ts`)

```typescript
contacts: Contact[] = [
  {
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    estado: 'Casado',
    direccion: 'Calle 123, Ciudad',
    telefono: '1111-2222',
    edad: 30,
    favorito: true
  },
  // ...otros contactos
];
```

### Uso de directivas modernas (`src/app/pages/contact-list/contact-list.html`)

```html
<!-- Si no hay selectedContact, se muestra la lista -->
@if (!selectedContact) {
  <div class="contact-list-wrapper">
    <h1>Contact List</h1>
    <hr>
    @if (contacts.length === 0) {
      <div class="lista-vacia">
        <p>La lista de contactos está vacía 😞</p>
      </div>
    }
    @else {
      <div class="contact-list-grid">
        @for (contact of contacts; track contact.email) {
          <app-contact-card
            [contact]="contact"
            (viewDetail)="setSelectedContact($event)">
          </app-contact-card>
        }
      </div>
    }
  </div>
}

@else {
  <div class="detalle-wrapper">
    @switch (selectedContact.favorito) {
      @case (true) {
        <p class="detalle-favorito">Este usuario está guardado como <strong>favorito</strong></p>
      }
      @case (false) {
        <p class="detalle-no-favorito">Este usuario no está guardado como favorito</p>
      }
    }
    <app-contact-detail
      [contact]="selectedContact"
      (closeDetail)="emptySelectedContact()">
    </app-contact-detail>
  </div>
}
```

### Código del pipe personalizado (`src/app/pipes/email-masking-pipe-pipe.ts`)

```typescript
@Pipe({
  name: 'emailMaskingPipe',
})
export class EmailMaskingPipePipe implements PipeTransform {
  transform(value: string): string {
    const [user, domain] = value.split('@');
    const firstChar = user[0];
    const lastChar = user[user.length - 1];
    const masked = '*'.repeat(8);
    return `${firstChar}${masked}${lastChar}@${domain}`;
  }
}
```

### Uso de `@switch` en detalle (`src/app/pages/contact-detail/contact-detail.html`)

```html
@switch(contact.estado) {
  @case('Soltero') {
    <p style="color: royalblue">¡Disfruta tu soltería!</p>
  }
  @case('Casado') {
    <p style="color: green">¡Felicidades por tu matrimonio!</p>
  }
  @case('Divorciado') {
    <p style="color: orange">¡Ánimo, nuevas oportunidades vendrán!</p>
  }
  @default {
    <p>Estado desconocido.</p>
  }
}
```

---

## 📚 Recursos

- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Directivas modernas Angular 17+](https://angular.dev/guide/structural-directives#modern-syntax)
- Consulta el enunciado de la Tarea en el archivo `Tarea1.md` y `Tarea2.md`.

---

# Tarea 3 – Servicios, Inyección de Dependencias y Signals en Angular 17+

## 🎯 Objetivo

Modernizar la gestión de contactos creando un **servicio standalone** con Signals, usando la inyección Angular 17+ (`inject()`), y haciendo la aplicación completamente reactiva y desacoplada. Toda la presentación y lógica se basan en signals y directivas modernas.

---

## 📦 Arquitectura implementada

### 1. Servicio Standalone – `contacts.service.ts`

- **Estado centralizado** usando `signal<Contact[]>` para la lista de contactos.
- **Reactividad avanzada** mediante:
  - `computed()` para derivados (total de contactos, total de favoritos).
  - `effect()` para loguear cambios y posibles side-effects.
- **Métodos principales:**
  - `getContacts(): Signal<Contact[]>`
  - `addContact(newContact: Contact): void`
  - `updateContact(updatedContact: Contact): void`
  - `setSelectedContact(contact: Contact): void`
  - `clearSelectedContact(): void`
  - `getSelectedContact(): Signal<Contact|null>`
- **Buen tipado y encapsulamiento** (solo lectura fuera del servicio).

---

### 2. Componente Principal – `contact-list`

- Obtiene todos los datos y signals desde el servicio con `inject()`.
- Muestra la lista dinámicamente con signals.
- Renderiza la cantidad total de contactos y de favoritos con signals computados.
- Usa directivas modernas `@for`, `@if`, `@switch` para lógica estructural clara y eficiente.
- Botón “Agregar elemento” que invoca el servicio, demostrando reactividad total.
- Detalle de contacto mostrado usando un signal para la selección.
- El array estático original solo se mantiene por compatibilidad, pero toda la UI se alimenta del servicio.

---

### 3. Componentes hijos y eventos

- Los cambios de favorito se emiten del componente hijo al padre; el padre actualiza el servicio, siguiendo el patrón inmutable.
- Sin mutaciones directas sobre el objeto en el hijo; todo cambio pasa por el servicio para activar signals.

---

### 4. Buenas Prácticas y Mejoras

- Código preparado para ampliaciones futuras (edición, borrado, persistencia local/backend).
- Logging de cambios activo mediante `effect()`.
- Ejemplo listo para demostraciones de arquitectura reactiva Angular 17+.

---

## ✨ Reactividad en acción

- La UI se actualiza de manera automática ante cualquier acción: agregar, modificar o seleccionar contactos.
- El total de contactos y favoritos siempre reflejan el estado real de la lista.
- El flujo es íntegramente reactivo; toda la lógica se basa en signals y estado centralizado.

---
