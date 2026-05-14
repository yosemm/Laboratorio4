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



// Inicializar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor de Pokédex corriendo en http://localhost:${PORT}`);
});