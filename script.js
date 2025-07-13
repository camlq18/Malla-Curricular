const ramos = [
  // Primer Semestre (Impar)
  { nombre: 'Física I', id: 'fisica1', creditos: 4, requisitos: [], abre: ['fisica2'], semestre: 1, impar: true },
  { nombre: 'Álgebra I', id: 'algebra1', creditos: 5, requisitos: [], abre: ['algebra2', 'programacion', 'estadistica'], semestre: 1, impar: true },
  { nombre: 'Cálculo I', id: 'calculo1', creditos: 5, requisitos: [], abre: ['calculo2'], semestre: 1, impar: true },
  { nombre: 'Química I', id: 'quimica1', creditos: 5, requisitos: [], abre: ['quimica2'], semestre: 1, impar: true },
  { nombre: 'Desarrollo de Habilidades de Gestión', id: 'gestion1', creditos: 3, requisitos: [], abre: ['liderazgo'], semestre: 1, impar: true },

  // Segundo Semestre (Par)
  { nombre: 'Física II', id: 'fisica2', creditos: 4, requisitos: ['fisica1'], abre: ['mecanica', 'termodinamica', 'maquinas'], semestre: 2, impar: false },
  { nombre: 'Álgebra II', id: 'algebra2', creditos: 5, requisitos: ['algebra1'], abre: ['calculo3', 'ecuaciones'], semestre: 2, impar: false },
  { nombre: 'Cálculo II', id: 'calculo2', creditos: 5, requisitos: ['calculo1'], abre: ['calculo3', 'ecuaciones', 'estadistica'], semestre: 2, impar: false },
  { nombre: 'Química II', id: 'quimica2', creditos: 5, requisitos: ['quimica1'], abre: [], semestre: 2, impar: false },
  { nombre: 'Introducción a la Innovación en Ingeniería', id: 'innovacion1', creditos: 2, requisitos: [], abre: [], semestre: 2, impar: false },

  // Tercer Semestre (Impar)
  { nombre: 'Cálculo III', id: 'calculo3', creditos: 5, requisitos: ['calculo2', 'algebra2'], abre: ['calculo_numerico', 'mecanica', 'optimizacion1'], semestre: 3, impar: true },
  { nombre: 'Ecuaciones Diferenciales', id: 'ecuaciones', creditos: 4, requisitos: ['calculo2', 'algebra2'], abre: ['maquinas'], semestre: 3, impar: true },
  { nombre: 'Programación', id: 'programacion', creditos: 3, requisitos: ['algebra1'], abre: ['calculo_numerico', 'optimizacion1'], semestre: 3, impar: true },
  { nombre: 'Estadística', id: 'estadistica', creditos: 4, requisitos: ['calculo2', 'algebra1'], abre: ['inferencia', 'micro'], semestre: 3, impar: true },
  { nombre: 'Inglés I', id: 'ingles1', creditos: 5, requisitos: [], abre: ['ingles2'], semestre: 3, impar: true },
  { nombre: 'Liderazgo y Trabajo en Equipo', id: 'liderazgo', creditos: 2, requisitos: ['gestion1'], abre: [], semestre: 3, impar: true },

  // Cuarto Semestre (Par)
  { nombre: 'Inferencia Estadística y Muestreo', id: 'inferencia', creditos: 4, requisitos: ['estadistica'], abre: ['estadistica_multi'], semestre: 4, impar: false },
  { nombre: 'Cálculo Numérico', id: 'calculo_numerico', creditos: 4, requisitos: ['programacion', 'calculo3'], abre: [], semestre: 4, impar: false },
  { nombre: 'Mecánica', id: 'mecanica', creditos: 3, requisitos: ['fisica2', 'calculo3'], abre: ['mecanica_flu'], semestre: 4, impar: false },
  { nombre: 'Termodinámica', id: 'termodinamica', creditos: 4, requisitos: ['fisica2'], abre: ['mecanica_flu'], semestre: 4, impar: false },
  { nombre: 'Modelación de Sistemas', id: 'modelacion', creditos: 2, requisitos: [], abre: ['administracion', 'tecnologia'], semestre: 4, impar: false },
  { nombre: 'Inglés II', id: 'ingles2', creditos: 5, requisitos: ['ingles1'], abre: [], semestre: 4, impar: false },

  // Quinto Semestre (Impar)
  { nombre: 'Mecánica de Fluidos', id: 'mecanica_flu', creditos: 4, requisitos: ['mecanica', 'termodinamica'], abre: ['transferencia'], semestre: 5, impar: true },
  { nombre: 'Máquinas Eléctricas', id: 'maquinas', creditos: 4, requisitos: ['ecuaciones', 'fisica2'], abre: [], semestre: 5, impar: true },
  { nombre: 'Microeconomía', id: 'micro', creditos: 4, requisitos: ['estadistica'], abre: ['macro'], semestre: 5, impar: true },
  { nombre: 'Análisis Estadístico Multivariado', id: 'estadistica_multi', creditos: 3, requisitos: ['inferencia'], abre: ['simulacion', 'gestion_calidad'], semestre: 5, impar: true },
  { nombre: 'Optimización I', id: 'optimizacion1', creditos: 3, requisitos: ['programacion', 'calculo3'], abre: ['simulacion', 'optimizacion2', 'diseno_prod'], semestre: 5, impar: true },
  { nombre: 'Práctica Laboral', id: 'practica1', creditos: 2, requisitos: [], abre: [], semestre: 5, impar: true },

  // Sexto Semestre (Par)
  { nombre: 'Transferencia de Calor', id: 'transferencia', creditos: 4, requisitos: ['mecanica_flu'], abre: ['procesos'], semestre: 6, impar: false },
  { nombre: 'Administración', id: 'administracion', creditos: 3, requisitos: ['modelacion'], abre: ['marketing', 'contabilidad', 'estrategia', 'gestion_personas'], semestre: 6, impar: false },
  { nombre: 'Macroeconomía', id: 'macro', creditos: 3, requisitos: ['micro'], abre: [], semestre: 6, impar: false },
  { nombre: 'Simulación', id: 'simulacion', creditos: 3, requisitos: ['estadistica_multi', 'optimizacion1'], abre: ['planificacion'], semestre: 6, impar: false },
  { nombre: 'Optimización II', id: 'optimizacion2', creditos: 3, requisitos: ['optimizacion1'], abre: [], semestre: 6, impar: false },
  { nombre: 'Dibujo Industrial', id: 'dibujo', creditos: 3, requisitos: [], abre: [], semestre: 6, impar: false },

  // Séptimo Semestre (Impar)
  { nombre: 'Procesos Industriales', id: 'procesos', creditos: 3, requisitos: ['transferencia'], abre: [], semestre: 7, impar: true },
  { nombre: 'Innovación', id: 'innovacion2', creditos: 3, requisitos: [], abre: [], semestre: 7, impar: true, creditosNecesarios: 100 },
  { nombre: 'Marketing', id: 'marketing', creditos: 3, requisitos: ['administracion'], abre: [], semestre: 7, impar: true },
  { nombre: 'Contabilidad General y de Costos', id: 'contabilidad', creditos: 3, requisitos: ['administracion'], abre: ['ingenieria_eco', 'finanzas'], semestre: 7, impar: true },
  { nombre: 'Gestión Estratégica y Control de Gestión', id: 'estrategia', creditos: 4, requisitos: ['administracion'], abre: [], semestre: 7, impar: true },
  { nombre: 'Sustentabilidad en Ingeniería', id: 'sustentabilidad', creditos: 3, requisitos: [], abre: [], semestre: 7, impar: true, creditosNecesarios: 110 },
  { nombre: 'Complementario I', id: 'complementario1', creditos: 3, requisitos: [], abre: [], semestre: 7, impar: true },

  // Octavo Semestre (Par)
  { nombre: 'Planificación y Control de Producción', id: 'planificacion', creditos: 4, requisitos: ['simulacion'], abre: [], semestre: 8, impar: false },
  { nombre: 'Ingeniería Económica', id: 'ingenieria_eco', creditos: 3, requisitos: ['contabilidad'], abre: ['evaluacion'], semestre: 8, impar: false },
  { nombre: 'Finanzas', id: 'finanzas', creditos: 4, requisitos: ['contabilidad'], abre: [], semestre: 8, impar: false },
  { nombre: 'Gestión y Control de la Calidad', id: 'gestion_calidad', creditos: 3, requisitos: ['estadistica_multi'], abre: [], semestre: 8, impar: false },
  { nombre: 'Tecnologías de la Información', id: 'tecnologia', creditos: 4, requisitos: ['modelacion'], abre: [], semestre: 8, impar: false },
  { nombre: 'Complementario II', id: 'complementario2', creditos: 2, requisitos: [], abre: [], semestre: 8, impar: false },

  // Noveno Semestre (Impar)
  { nombre: 'Diseño de Sistemas de Producción', id: 'diseno_prod', creditos: 3, requisitos: ['optimizacion1'], abre: [], semestre: 9, impar: true, creditosNecesarios: 150 },
  { nombre: 'Evaluación de Proyectos', id: 'evaluacion', creditos: 3, requisitos: ['ingenieria_eco'], abre: ['direccion', 'emprendimiento'], semestre: 9, impar: true },
  { nombre: 'Gestión Personas y Comportamiento Organizacional', id: 'gestion_personas', creditos: 3, requisitos: ['administracion'], abre: [], semestre: 9, impar: true },
  { nombre: 'Práctica Profesional', id: 'practica2', creditos: 4, requisitos: [], abre: [], semestre: 9, impar: true },
  { nombre: 'Electiva I', id: 'electiva1', creditos: 3, requisitos: [], abre: [], semestre: 9, impar: true },
  { nombre: 'Electiva II', id: 'electiva2', creditos: 3, requisitos: [], abre: [], semestre: 9, impar: true },
  { nombre: 'Electiva III', id: 'electiva3', creditos: 3, requisitos: [], abre: [], semestre: 9, impar: true },

  // Décimo Semestre (Par)
  { nombre: 'Dirección y Control de Proyectos', id: 'direccion', creditos: 3, requisitos: ['evaluacion'], abre: [], semestre: 10, impar: false },
  { nombre: 'Taller de Emprendimiento', id: 'emprendimiento', creditos: 3, requisitos: ['evaluacion'], abre: [], semestre: 10, impar: false },
  { nombre: 'Logística', id: 'logistica', creditos: 3, requisitos: [], abre: [], semestre: 10, impar: false, creditosNecesarios: 150 },
  { nombre: 'Electiva IV', id: 'electiva4', creditos: 3, requisitos: [], abre: [], semestre: 10, impar: false },
  { nombre: 'Electiva V', id: 'electiva5', creditos: 3, requisitos: [], abre: [], semestre: 10, impar: false },
  { nombre: 'Electiva VI', id: 'electiva6', creditos: 3, requisitos: [], abre: [], semestre: 10, impar: false },

  // Onceavo Semestre
  { nombre: 'Memoria de Título', id: 'memoria', creditos: 20, requisitos: [], abre: [], semestre: 11, impar: null },
];

const estadoRamos = {}; // 'bloqueado', 'desbloqueado', 'aprobado'

function creditosAprobados() {
  return Object.entries(estadoRamos)
    .filter(([_, estado]) => estado === 'aprobado')
    .map(([id]) => {
      const ramo = ramos.find(r => r.id === id);
      return ramo ? ramo.creditos : 0;
    })
    .reduce((a, b) => a + b, 0);
}

function crearMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  // Mostrar todos los ramos (sin filtrar impar/par)
  const ramosFiltrados = ramos;

  // Agrupar por semestre
  const semestresAgrupados = {};
  ramosFiltrados.forEach(r => {
    if (!semestresAgrupados[r.semestre]) semestresAgrupados[r.semestre] = [];
    semestresAgrupados[r.semestre].push(r);
  });

  // Inicializar estados y desbloquear los que no tienen requisitos ni créditos necesarios
  ramosFiltrados.forEach(ramo => {
    const creditos = creditosAprobados();
    const creditosMinimos = ramo.creditosNecesarios || 0;
    const cumpleCreditos = creditos >= creditosMinimos;
    const requisitosCumplidos = ramo.requisitos.length === 0 || ramo.requisitos.every(req => estadoRamos[req] === 'aprobado');

    if (!(ramo.id in estadoRamos)) {
      estadoRamos[ramo.id] = (requisitosCumplidos && cumpleCreditos) ? 'desbloqueado' : 'bloqueado';
    }
  });

  // Ordenar y mostrar semestres con sus ramos
  Object.keys(semestresAgrupados).sort((a,b) => a-b).forEach(semNum => {
    const divSem = document.createElement('div');
    divSem.className = 'semestre';

    const titulo = document.createElement('h2');
    titulo.textContent = `Semestre ${semNum}`;
    divSem.appendChild(titulo);

    const ramosContainer = document.createElement('div');
    ramosContainer.className = 'ramos-container';

    semestresAgrupados[semNum].forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.className = 'ramo ' + estadoRamos[ramo.id];
      divRamo.id = ramo.id;
      divRamo.innerText = `${ramo.nombre}\n(${ramo.creditos} créditos)`;

      divRamo.addEventListener('click', () => {
        if (estadoRamos[ramo.id] !== 'desbloqueado') return;

        // Aprobar ramo
        estadoRamos[ramo.id] = 'aprobado';
        divRamo.classList.remove('desbloqueado');
        divRamo.classList.add('aprobado');

        actualizarEstados();
      });

      ramosContainer.appendChild(divRamo);
    });

    divSem.appendChild(ramosContainer);
    contenedor.appendChild(divSem);
  });
}

function actualizarEstados() {
  const creditos = creditosAprobados();

  ramos.forEach(ramo => {
    const creditosMinimos = ramo.creditosNecesarios || 0;
    const cumpleCreditos = creditos >= creditosMinimos;
    const requisitosCumplidos = ramo.requisitos.length === 0 || ramo.requisitos.every(req => estadoRamos[req] === 'aprobado');

    if (estadoRamos[ramo.id] !== 'aprobado') {
      if (requisitosCumplidos && cumpleCreditos) {
        estadoRamos[ramo.id] = 'desbloqueado';
        const divRamo = document.getElementById(ramo.id);
        if (divRamo) {
          divRamo.classList.remove('bloqueado');
          divRamo.classList.add('desbloqueado');
        }
      } else {
        estadoRamos[ramo.id] = 'bloqueado';
        const divRamo = document.getElementById(ramo.id);
        if (divRamo) {
          divRamo.classList.remove('desbloqueado');
          divRamo.classList.add('bloqueado');
        }
      }
    }
  });
}

window.onload = () => {
  crearMalla();
};
