import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

// Datos de ejemplo (pets)
let pets = [
  {
    id: uuidv4(),
    name: "Buddy",
    age: "Adulto",
    type: "Perro",
    description: "Un perro amigable y juguetón.",
    characteristics: ["Vacunado", "Sociable", "Energético"],
    photo:
      "https://img.freepik.com/vector-premium/labrador-retriever-es-ilustracion-vectorial-muy-bonita_969863-183791.jpg",
  },
  {
    id: uuidv4(),
    name: "Whiskers",
    age: "Cachorro",
    type: "Gato",
    description: "Un gatito curioso y travieso.",
    characteristics: ["Desparasitado", "Cariñoso", "Activo"],
    photo:
      "https://img.freepik.com/vector-premium/perro-collar-que-dice-perro-el_969863-208900.jpg",
  },
  {
    id: uuidv4(),
    name: "Rex",
    age: "Senior",
    type: "Perro",
    description: "Un perro mayor, pero aún con energía.",
    characteristics: ["Calmado", "Leal", "Entrenado"],
    photo:
      "https://us.123rf.com/450wm/zzn/zzn2306/zzn230600814/207461301-lindo-perro-corgi-de-dibujos-animados-sobre-fondo-azul-ilustraci%C3%B3n-vectorial.jpg",
  },
  {
    id: uuidv4(),
    name: "Cleo",
    age: "Adulto",
    type: "Gato",
    description: "Una gata independiente y misteriosa.",
    characteristics: ["Tranquila", "Cazadora", "Limpia"],
    photo:
      "https://img.freepik.com/premium-photo/small-cute-cartoon-smiling-cat_501974-8280.jpg",
  },
  {
    id: uuidv4(),
    name: "Max",
    age: "Cachorro",
    type: "Perro",
    description: "Un cachorro con mucha energía y ganas de jugar.",
    characteristics: ["Vacunado", "Cariñoso", "Curioso"],
    photo:
      "https://img.freepik.com/vector-premium/lindo-cachorro-dibujos-animados-sentado-ilustracion-vectorial_969863-346115.jpg",
  },
  {
    id: uuidv4(),
    name: "Luna",
    age: "Adulto",
    type: "Gato",
    description: "Una gata que ama dormir y explorar.",
    characteristics: ["Curiosa", "Independiente", "Dormilona"],
    photo:
      "https://img.freepik.com/premium-vector/cute-cartoon-cat_975395-1071.jpg",
  },
  {
    id: uuidv4(),
    name: "Bella",
    age: "Senior",
    type: "Perro",
    description: "Una perra leal y tranquila.",
    characteristics: ["Cariñosa", "Leal", "Entrenada"],
    photo:
      "https://img.freepik.com/vector-premium/icono-vectorial-dibujos-animados-perro-ilustracion-dibujos-animados-dibujados-mano_884500-29697.jpg",
  },
  {
    id: uuidv4(),
    name: "Simba",
    age: "Cachorro",
    type: "Gato",
    description: "Un gatito juguetón y curioso.",
    characteristics: ["Sociable", "Curioso", "Aventurero"],
    photo:
      "https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg",
  },
  {
    id: uuidv4(),
    name: "Charlie",
    age: "Adulto",
    type: "Perro",
    description: "Un perro protector y amigable.",
    characteristics: ["Leal", "Protector", "Cariñoso"],
    photo:
      "https://img.freepik.com/vector-premium/perro-dibujos-animados-cachorro-simple-sobre-fondo-azul_840347-932.jpg",
  },
];

// GET all pets
router.get("/pets", (req, res) => {
  res.json(pets);
});

// GET a pet by ID
router.get("/pets/:petId", (req, res) => {
  const petId = req.params.petId;
  const pet = pets.find((pet) => pet.id === petId);
  res.json(pet);
});

// POST a new pet
router.post("/pets", (req, res) => {
  const pet = req.body;
  pet.id = uuidv4();
  pets.push(pet);
  res.status(201).json(pets);
});

// DELETE (adopt) a pet by ID
router.delete("/pets/:petId", (req, res) => {
  const petId = req.params.petId;
  pets = pets.filter((pet) => pet.id !== petId);
  res.status(204).json(pets);
});

// PUT (update) a pet by ID
router.put("/pets/:petId", (req, res) => {
  const petId = req.params.petId;
  const updatedPet = req.body;

  pets = pets.map((pet) => {
    if (pet.id === petId) {
      return { ...pet, ...updatedPet, id: petId };
    }
    return pet;
  });

  res.json(pets);
});

export default router;

