# Prueba técnica Mayoral

## Iniciar el proyecto

### Requisitos
- Tener instalado node y npm en sus últimas versiones estables a ser posible.

### Instalación
1. Descargar el proyecto `git clone https://github.com/acua01/mayoral.git`
2. Instalar las dependencias

### Modo desarrollo
Ejecutar `npm run dev` o `yarn run dev` y se inicializará el servidor de desarrollo en el puerto **3000**

### Testing
Para lanzar los tests se debe de ejecutar `npm run test` o `yarn run test`. Si se quiere ver un reporte del coverage `npm run test:coverage` o `yarn run test:coverage`

# Tecnologías
- **Next.js**. Dentro de esta se han utilizado **Hooks** para los estados, **Custom Hooks** para la refactorización de la lógica y **getStaticProps** para consumir el JSON en la parte del servidor.
- **SASS** junto a la metodología **BEMIT** o **BEM + ITCSS** para todo el estilado, animación y responsive de la aplicación.
- **Jest** junto con **Testing Library** para los tests.
