# Solución para la parte 1 del laboratorio

A continuación, se listan los errores detectados y su corrección.

## Error 1: forma moderna ES modules
- **Ubicación:** Extensión del archivo / Falta de package.json.  
- **Tipo de error:** Sintaxis.  
- **Qué estaba mal:** El archivo no estaba siendo tratado como ES Module.  
- **Cómo lo corregí:** Agregué un package.json con `type: "module"`.  
- **Por qué funciona ahora:** Ahora Node.js trata al archivo como un módulo, por lo que los imports funcionan correctamente.

## Error 2: falta de ;
- **Ubicación:** En la línea `const PORT = 3000`  
- **Tipo de error:** Sintaxis.  
- **Qué estaba mal:** Falta `;`.  
- **Cómo lo corregí:** Agregué el `;` faltante.  
- **Por qué funciona ahora:** Ahora termina la línea correctamente y se procede a crear la variable `server`.

## Error 3 y 4: falta de );
- **Ubicación:** En la línea `server.listen(PORT, () => { console.log("Servidor corriendo en http://localhost:3000") }` y también en la línea `const server = http.createServer(async (req, res) => {`  
- **Tipo de error:** Sintaxis.  
- **Qué estaba mal:** Falta cerrar el paréntesis de los argumentos y agregar el `;`.  
- **Cómo lo corregí:** Agregué el `);` faltante.  
- **Por qué funciona ahora:** Al corregir el error de sintaxis, se llama la función correctamente.

## Error 5: encabezado Content-Type incorrecto
- **Ubicación:** En la línea `{ "Content-Type": "application-json" })`  
- **Tipo de error:** Protocolo HTTP.  
- **Qué estaba mal:** Tiene `-` en vez de `/`.  
- **Cómo lo corregí:** Reemplacé el carácter.  
- **Por qué funciona ahora:** Ahora usa el tipo correcto.

## Error 6: código de estado HTTP incorrecto
- **Ubicación:** En la línea `res.writeHead(200, { "Content-Type": "text/plain" })`  
  `res.end("Ruta no encontrada")`  
- **Tipo de error:** Respuesta.  
- **Qué estaba mal:** Usa 200 para una respuesta fallida de “no encontrada” en vez de 404.  
- **Cómo lo corregí:** Lo cambié a 404.  
- **Por qué funciona ahora:** Usa el código de error correcto.

## Error 7: uso innecesario de JSON.stringify
- **Ubicación:** `JSON.stringify(texto)`  
- **Tipo de error:** Lógica.  
- **Qué estaba mal:** Se está usando `stringify` con un archivo que ya es un archivo JSON.  
- **Cómo lo corregí:** Simplemente le pasé `texto` como argumento.  
- **Por qué funciona ahora:** Ya no agrega caracteres adicionales por esta conversión extra.

## Error 8: falta de await en lectura de archivo
- **Ubicación:** `const texto = fs.readFile(filePath, "utf-8")`  
- **Tipo de error:** Asincronía.  
- **Qué estaba mal:** No tiene el `await`.  
- **Cómo lo corregí:** Le agregué el `await` faltante, ya que la función es asíncrona.  
- **Por qué funciona ahora:** Ahora espera a que el archivo esté disponible antes de continuar.

## Resultado
Ahora ya funciona el servidor:

![Servidor corregido](screenshots/servidorcorregido.png)