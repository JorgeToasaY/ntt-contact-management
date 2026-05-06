Standalone Components + Nuevas Directivas (@for, @if, @switch)
En esta actividad deberán extender el proyecto que ya vienen desarrollando, agregando una nueva funcionalidad basada en la arquitectura moderna de Angular 17+.
 
🎯 Objetivo de la tarea  
Agregar una vista de detalle del elemento utilizando Standalone Components y las nuevas directivas modernas, integrando esta funcionalidad al proyecto.
 
📌 Instrucciones de la tarea  
Deberán completar todas las siguientes actividades:  
1. Crear un nuevo componente standalone  
Nombre sugerido: contact-detail o item-detail.  
Este componente debe:  
- Ser completamente standalone (standalone: true).  
- Recibir un elemento mediante @Input().  
- Mostrar la información completa del elemento seleccionado.

2. Agregar un botón en cada tarjeta del listado existente  
En el componente que ya tienen (contact-card o item-card), agregar un botón:  
- “Ver detalle” o similar.  
- Emitir un evento al componente padre con el elemento seleccionado.

3. En el componente principal del listado  
- Agregar una propiedad para almacenar el elemento seleccionado.  
- Usar las nuevas directivas modernas:  
  - @if → Mostrar el detalle solo cuando haya un elemento seleccionado.  
  - @switch → Mostrar estilos o mensajes según el estado del elemento.  
  - @for → Reemplazar *ngFor en este componente.

4. Mostrar el componente de detalle  
Cuando el usuario haga clic en “Ver detalle”, deben:  
- Guardar el elemento seleccionado.  
- Renderizar el componente standalone contact-detail usando @if.  
- Mostrar un botón “Cerrar detalle” que limpie la selección.

📤 Entrega requerida  
1. Capturas de pantalla  
- Botón “Ver detalle” funcionando.  
- Vista del detalle renderizada con el componente standalone.  
- Uso visible de @if, @switch y @for.  
- Comportamiento de abrir y cerrar detalle.

2. Código  
- Código del componente standalone de detalle.  
- Evento emitido desde el componente hijo.  
- Lógica del componente principal para manejar la selección.  
- Uso de las nuevas directivas.
