# Tarea 3 – Servicios, Inyección de Dependencias y Signals en Angular 17+
Taller de Angular 17+ – Clase 23/04/2026

## 🎯 Objetivo de la tarea

Extender el proyecto incorporando un **servicio standalone** para manejar los datos y el estado, utilizando **inject()** y **Signals** para la gestión reactiva del estado.

## 📌 Instrucciones

### 1. Crear un servicio standalone

- Nombre sugerido: `contacts.service.ts` o `items.service.ts`.
- El servicio debe:
  - Ser standalone (`providedIn: 'root'`).
  - Usar señal (`signal()`) para almacenar la lista de elementos.
  - Exponer métodos para:
    - Obtener la lista.
    - Agregar un elemento.
    - Actualizar un elemento.
    - (Opcional) Seleccionar un elemento.

### 2. Reemplazar el arreglo estático del componente principal

- Mantener el arreglo original (para no romper lo ya construido).
- Usar el **servicio** como nueva fuente de datos.
- El componente debe obtener los datos del servicio mediante `inject()`.

### 3. Integrar Signals en el flujo

En el servicio:
- Crear un `signal()` para la lista de elementos.
- Crear un `computed()` para datos derivados (por ej.: cantidad de elementos).
- Crear un `effect()` para reaccionar a cambios (ej.: `console.log` cuando cambia la lista).

### 4. Actualizar el componente principal

- Inyectar el servicio usando `inject()`.
- Mostrar la lista proveniente del servicio.
- Mostrar el valor del `computed()` (ejemplo: “Total de elementos: X”).
- Usar `@if` para mostrar mensajes cuando la lista esté vacía.
- Usar `@for` para renderizar la lista.

### 5. Agregar botón para agregar un nuevo elemento

- En el componente principal:
  - Crear botón “Agregar elemento”.
  - Llamar al método del servicio para agregar.
  - Comprobar la reactividad de la vista.

### 6. (Opcional recomendado)

- Integrar el servicio con el componente de detalle:
  - Guardar el elemento seleccionado en un `signal()` dentro del servicio.
  - Mostrar el detalle usando `@if`.

## 📤 Entrega requerida

1. **Capturas de pantalla**
   - Servicio standalone creado.
   - Uso de `signal()`, `computed()` y `effect()`.
   - Lista renderizada desde el servicio.
   - Botón agregando elementos dinámicamente.
   - Vista actualizándose de forma reactiva.

2. **Código**
   - Servicio standalone completo.
   - Inyección con `inject()` en el componente.
   - Uso de Signals en el servicio.
   - Uso de directivas modernas en la vista.
