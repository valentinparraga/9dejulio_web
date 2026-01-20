// Textos
// Texto de historia
const historia = "El Centro Fomento Social Cultural y Deportivo 9 de Julio fue fundado en 1953... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo aspernatur est tempora aut sed veniam. Incidunt nihil, mollitia nisi dolorum quo eaque. Iure non saepe doloremque minima, sit voluptatum facilis neque tenetur veniam! Iste porro ullam autem fuga sed."

const categorias = [
  { key: "mayores", titulo: "Mayores" },
  { key: "juveniles", titulo: "Juveniles" },
  { key: "femenino", titulo: "Femenino" }
];

const divisiones = [
  {
    categoria: "mayores",
    nombre: "Primera",
    dt: "Franco Evangelista",
    dias: "Lunes, Miércoles y Jueves",
    horario: "18:30 a 20:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "mayores",
    nombre: "Reserva",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Jueves",
    horario: "18:30 a 20:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "mayores",
    nombre: "Cuarta",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Viernes",
    horario: "17:30 a 19:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "mayores",
    nombre: "Senior",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Jueves",
    horario: "18:30 a 20:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Quinta",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Viernes",
    horario: "17:30 a 19:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Sexta",
    dt: "Juan Pérez",
    dias: "Miércoles y Viernes",
    horario: "18:00 a 19:30",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Séptima",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Viernes",
    horario: "17:30 a 19:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Octava",
    dt: "Juan Pérez",
    dias: "Miércoles y Viernes",
    horario: "18:00 a 19:30",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Novena",
    dt: "Juan Pérez",
    dias: "Lunes, Miércoles y Viernes",
    horario: "17:30 a 19:00",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "juveniles",
    nombre: "Pre Novena",
    dt: "Juan Pérez",
    dias: "Miércoles y Viernes",
    horario: "18:00 a 19:30",
    imagen: "https://placehold.co/300"
  },
  {
    categoria: "femenino",
    nombre: "Femenino",
    dt: "Juana Pérez",
    dias: "Miércoles y Viernes",
    horario: "17:30 a 19",
    imagen: "https://placehold.co/300"
  },
];

// Renderizado de seccion de historia
const textoHistoria = document.getElementById("historia-container");
textoHistoria.innerHTML += historia;

//Renderizado de sección de divisiones
const contenedorDivisiones = document.getElementById("divisiones-grid");

categorias.forEach(cat => {
  // Subtítulo de categoría (una sola vez)
  contenedorDivisiones.innerHTML += `
    <div class="col-12">
      <h3 id=${cat.titulo} class="mt-5 text-center division-title">${cat.titulo}</h3>
    </div>
  `;

  // Filtrar divisiones por categoría
  const divisionesFiltradas = divisiones.filter(
    division => division.categoria === cat.key
  );

  // Renderizar cards de esa categoría
  divisionesFiltradas.forEach(division => {
    contenedorDivisiones.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-division text-center h-100">
          <img src="${division.imagen}" class="card-img-top" alt="${division.nombre}">
          <div class="card-body">
            <h5 class="card-title mb-2">${division.nombre}</h5>
            <p class="card-text mb-1">
              <strong>DT:</strong> ${division.dt}
            </p>
            <p class="card-text text-muted small">
              Entrenamientos: ${division.dias}<br>
              ${division.horario} hs
            </p>
          </div>
        </div>
      </div>
    `;
  });
});
