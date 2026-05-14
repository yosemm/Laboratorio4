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

// Inicializar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor de Pokédex corriendo en http://localhost:${PORT}`);
});