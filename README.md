# Laboratorio 4 - Sistemas Web

Repo para el laboratorio de Sistemas web. 

## Descripción del Proyecto

Este proyecto es una **API REST de Pokédex** que permite manejar una colección de Pokémon con información como nombre, tipo, nivel, vida y ataques. 

- La API proporciona endpoints para consultar todos los Pokémon, filtrarlos por tipo, obtener información del servidor y más.

## Tecnologías

- **Node.js**: Runtime de JavaScript para ejecutar código en el servidor
- **Express.js**: Framework para crear aplicaciones web y APIs REST

## Instalación y Ejecución

### Requisitos previos
- Node.js instalado

### Pasos para levantar el servidor

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Levantar el servidor**
   ```bash
   node api/index.js
   ```

3. **Acceder a la API**
   - La API estará disponible en `http://localhost:3000`
   - Abre tu navegador o usa herramientas como `Postman` para hacer solicitudes

## Endpoints Principales

**Informativos:**
- GET / — Página principal con documentación HTML de los endpoints
- GET /info — Información del proyecto (nombre, curso, tecnologías)
- GET /saludo — Mensaje de bienvenida en texto plano
- GET /api/status — Estado del servidor (ok, puerto, timestamp)

**CRUD:**
- GET /api/pokemon — Obtener todos los Pokémon (Acepta query ?tipo=Fuego)
- GET /api/pokemon/:id — Obtener un Pokémon por su ID
- POST /api/pokemon — Crear un nuevo Pokémon
- PUT /api/pokemon/:id — Actualizar un Pokémon completo
- PATCH /api/pokemon/:id — Actualizar parcialmente un Pokémon
- DELETE /api/pokemon/:id — Eliminar un Pokémon por su ID

### Ejemplo de uso

```bash
# Obtener todos los Pokémon
curl http://localhost:3000/api/pokemon

# Filtrar Pokémon de tipo Fuego
curl http://localhost:3000/api/pokemon?tipo=Fuego

# Obtener información del servidor
curl http://localhost:3000/api/status
```

## Entregables

**Parte 1:**
- [SOLUCION.md](https://github.com/yosemm/Laboratorio4/blob/main/SOLUCION.md)
- [Servidor Corregido](https://github.com/yosemm/Laboratorio4/blob/main/servidor-corregido.js)

**Parte 2:**
- Código fuente de la API con Express (Pokédex) [index.js](api/index.js)
- Documentación y evidencia de pruebas realizadas con Postman [PRUEBAS.md](PRUEBAS.md)
- Screenshots del funcionamiento en Postman [Screenshots Postman](screenshots/Postman)