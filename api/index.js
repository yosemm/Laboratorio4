import express from 'express';
import crypto from 'crypto';

const app = express();
const PORT = 3000;

app.use(express.json());

// Definir recurso pokemon con sus 5 atributos: id, nombre, tipo, nivel, hp y ataques. 
let pokedex = [
    {
        id: crypto.randomUUID(),
        nombre: "Bulbasaur",
        tipo: "Planta/Veneno",
        nivel: 5,
        hp: 45,
        ataques: ["Rayo Solar", "Hoja Afilada"]
    },
    {
        id: crypto.randomUUID(),
        nombre: "Charmander",
        tipo: "Fuego",
        nivel: 5,
        hp: 39,
        ataques: ["Lanzallamas", "Llamarada"]
    },
    {
        id: crypto.randomUUID(),
        nombre: "Squirtle",
        tipo: "Agua",
        nivel: 5,
        hp: 44,
        ataques: ["Hidrobomba", "Rayo Burbuja"]
    },
    {
        id: crypto.randomUUID(),
        nombre: "Pikachu",
        tipo: "Eléctrico",
        nivel: 5,
        hp: 35,
        ataques: ["Impactrueno", "Bola Voltio"]
    }
];

// GET / : Doc en HTML 
app.get('/', (req, res) => {
    res.send(`
        <h1>Pokédex API</h1>
        <p>Bienvenido a la API REST de Pokémon. Aquí están los endpoints principales:</p>
        <ul>
            <li><b>GET /info</b>: Info del proyecto</li>
            <li><b>GET /saludo</b>: Mensaje de bienvenida</li>
            <li><b>GET /api/status</b>: Estado del server</li>
            <li><b>GET /api/pokemon</b>: Obtener todos los Pokémon</li>
        </ul>
    `);
});

// GET /info : JSON con datos del curso y API 
app.get('/info', (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de Pokédex",
        curso: "Sistemas y Tecnologías Web",
        tecnologia: "Node.js y Express",
        version: "1.0.0"
    });
});

// GET /saludo : Texto plano con un saludo
app.get('/saludo', (req, res) => {
    res.type('text/plain');
    res.send("¡Hola, Entrenador! Bienvenido a mi Pokédex.");
});

// GET /api/status : JSON con el estado del servidor 
app.get('/api/status', (req, res) => {
    res.json({
        ok: true,
        status: "Funcionando",
        puerto: PORT,
        timestamp: new Date().toISOString()
    });
});

// GET /api/pokemon : Obtener todos los Pokémon con opción de filtrado por tipo
app.get('/api/pokemon', (req, res) => {
    // Obtenemos el tipo (/api/pokemon?tipo=Fuego)
    const { tipo } = req.query; 

    if (tipo) {
        const filtrados = pokedex.filter(
            (p) => p.tipo.toLowerCase().includes(tipo.toLowerCase())
        );
        return res.status(200).json({ ok: true, data: filtrados });
    }

    // Si no hay filtro, devolvemos el arreglo completo
    res.status(200).json({ ok: true, data: pokedex });
});

// GET /api/pokemon/:id : Obtener un Pokémon por su ID
app.get('/api/pokemon/:id', (req, res) => {
    const { id } = req.params;
    
    const pokemon = pokedex.find((p) => p.id === id);

    if (!pokemon) {
        return res.status(404).json({ ok: false, error: "Pokémon no encontrado" });
    }

    // Si existe, lo devolvemos con 200
    res.status(200).json({ ok: true, data: pokemon });
});

// POST /api/pokemon : Crear un nuevo Pokémon
app.post('/api/pokemon', (req, res) => {
    const { nombre, tipo, nivel, hp, ataques } = req.body;

    // Validación
    if (!nombre || !tipo || nivel === undefined || hp === undefined || !ataques) {
        return res.status(400).json({ 
            ok: false, 
            error: "Faltan campos obligatorios. Asegúrate de enviar el nombre, tipo, nivel, hp y ataques." 
        });
    }

    // Creamos el nuevo Pokémon
    const nuevoPokemon = {
        id: crypto.randomUUID(),
        nombre,
        tipo,
        nivel,
        hp,
        ataques
    };

    pokedex.push(nuevoPokemon);

    // Devolvemos 201 con el nuevo Pokémon
    res.status(201).json({ ok: true, data: nuevoPokemon });
});

// PUT /api/pokemon/:id : Actualiza un Pokémon completo
app.put('/api/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, nivel, hp, ataques } = req.body;

    const index = pokedex.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ ok: false, error: "Pokémon no encontrado" });
    }

    // Validación para PUT 
    if (!nombre || !tipo || nivel === undefined || hp === undefined || !ataques) {
        return res.status(400).json({ 
            ok: false, 
            error: "Para PUT debes enviar todos los campos: nombre, tipo, nivel, hp y ataques." 
        });
    }

    pokedex[index] = { id, nombre, tipo, nivel, hp, ataques };

    res.status(200).json({ ok: true, data: pokedex[index] });
});

// PATCH /api/pokemon/:id : Actualiza parcialmente un Pokémon
app.patch('/api/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const datosNuevos = req.body;

    const index = pokedex.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ ok: false, error: "Pokémon no encontrado" });
    }

    pokedex[index] = { ...pokedex[index], ...datosNuevos };

    res.status(200).json({ ok: true, data: pokedex[index] });
});

// DELETE /api/pokemon/:id : Elimina un Pokémon por su ID
app.delete('/api/pokemon/:id', (req, res) => {
    const { id } = req.params;
    
    // Buscamos el índice del Pokémon
    const index = pokedex.findIndex(p => p.id === id);

    if (index === -1) {
        // Si no existe, devolvemos 404
        return res.status(404).json({ ok: false, error: "Pokémon no encontrado" });
    }

    const pokemonEliminado = pokedex.splice(index, 1)[0];

    // Devolvemos 200 y el Pokémon que acabamos de eliminar
    res.status(200).json({ ok: true, data: pokemonEliminado, mensaje: "Pokémon eliminado exitosamente" });
});

// Rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        ruta: req.originalUrl,
        metodo: req.method,
        sugerencia: "Visita / para ver los endpoints disponibles"
    });
});

// Inicializar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor de Pokédex corriendo en http://localhost:${PORT}`);
});