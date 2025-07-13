const ramos = [
  // Primer Semestre
  { nombre: 'Física I', id: 'fisica1', creditos: 4, requisitos: [], abre: ['fisica2'] },
  { nombre: 'Álgebra I', id: 'algebra1', creditos: 5, requisitos: [], abre: ['algebra2', 'programacion', 'estadistica'] },
  { nombre: 'Cálculo I', id: 'calculo1', creditos: 5, requisitos: [], abre: ['calculo2'] },
  { nombre: 'Química I', id: 'quimica1', creditos: 5, requisitos: [], abre: ['quimica2'] },
  { nombre: 'Desarrollo de Habilidades de Gestión', id: 'gestion1', creditos: 3, requisitos: [], abre: ['liderazgo'] },

  // Segundo Semestre
  { nombre: 'Física II', id: 'fisica2', creditos: 4, requisitos: ['fisica1'], abre: ['mecanica', 'termodinamica', 'maquinas'] },
  { nombre: 'Álgebra II', id: 'algebra2', creditos: 5, requisitos: ['algebra1'], abre: ['calculo3', 'ecuaciones'] },
  { nombre: 'Cálculo II', id: 'calculo2', creditos: 5, requisitos: ['calculo1'], abre: ['calculo3', 'ecuaciones', 'estadistica'] },
  { nombre: 'Química II', id: 'quimica2', creditos: 5, requisitos: ['quimica1'], abre: [] },
  { nombre: 'Intro a la Innovación', id: 'innovacion1', creditos: 2, requisitos: [], abre: [] },

  // Tercer Semestre
  { nombre: 'Cálculo III', id: 'calculo3', creditos: 5, requisitos: ['calculo2', 'algebra2'], abre: ['calculo_numerico', 'mecanica', 'optimizacion1'] },
  { nombre: 'Ecuaciones Diferenciales', id: 'ecuaciones', creditos: 4, requisitos: ['calculo2', 'algebra2'], abre: ['maquinas'] },
  { nombre: 'Programación', id: 'programacion', creditos: 3, requisitos: ['algebra1'], abre: ['calculo_numerico', 'optimizacion1'] },
  { nombre: 'Estadística', id: 'estadistica', creditos: 4, requisitos: ['calculo2', 'algebra1'], abre: ['inferencia', 'micro'] },
  { nombre: 'Inglés I', id: 'ingles1', creditos: 5, requisitos: [], abre: ['ingles2'] },
  { nombre: 'Liderazgo y Trabajo en Equipo', id: 'liderazgo', creditos: 2, requisitos: ['gestion1'], abre: [] },

  // Cuarto Semestre
  { nombre: 'Inferencia Estadística y Muestreo', id: 'inferencia', creditos: 4, requisitos: ['estadistica'], abre: ['estadistica_multi'] },
  { nombre: 'Cálculo Numérico', id: 'calculo_numerico', creditos: 4, requisitos: ['programacion', 'calculo3'], abre: [] },
  { nombre: 'Mecánica', id: 'mecanica', creditos: 3, requisitos: ['fisica2', 'calculo3'], abre: ['mecanica_flu'] },
  { nombre: 'Termodinámica', id: 'termodinamica', creditos: 4, requisitos: ['fisica2'], abre: ['mecanica_flu'] },
  { nombre: 'Modelación de Sistemas', id: 'modelacion', creditos: 2, requisitos: [], abre: ['administracion', 'tecnologia'] },
  { nombre: 'Inglés II', id: 'ingles2', creditos: 5, requisitos: ['ingles1'], abre: [] },

  // Quinto Semestre
  { nombre: 'Mecánica de Fluidos', id: 'mecanica_flu', creditos: 4, requisitos: ['mecanica', 'termodinamica'], abre: ['transferencia'] },
  { nombre: 'Máquinas Eléctricas', id: 'maquinas', creditos: 4, requisitos: ['ecuaciones', 'fisica2'], abre: [] },
  { nombre: 'Microeconomía', id: 'micro', creditos: 4, requisitos: ['estadistica'], abre: ['macro'] },
  { nombre: 'Análisis Estadístico Multivariado', id: 'estadistica_multi', creditos: 3, requisitos: ['inferencia'], abre: ['simulacion', 'gestion_calidad'] },
  { nombre: 'Optimización I', id: 'optimizacion1', creditos: 3, requisitos: ['programacion', 'calculo3'], abre: ['simulacion', 'optimizacion2', 'diseno_prod'] },
  { nombre: 'Práctica Laboral', id: 'practica1', creditos: 2, requisitos: [], abre: [] },

  // Sexto Semestre
  { nombre: 'Transferencia de Calor', id: 'transferencia', creditos: 4, requisitos: ['mecanica_flu'], abre: ['procesos'] },
  { nombre: 'Administración', id: 'administracion', creditos: 3, requisitos: ['modelacion'], abre: ['marketing', 'contabilidad', 'estrategia', 'gestion_personas'] },
  { nombre: 'Macroeconomía', id: 'macro', creditos: 3, requisitos: ['micro'], abre: [] },
  { nombre: 'Simulación', id: 'simulacion', creditos: 3, requisitos: ['estadistica_multi', 'optimizacion1'], abre: ['planificacion'] },
  { nombre: 'Optimización II', id: 'optimizacion2', creditos: 3, requisitos: ['optimizacion1'], abre: [] },
  { nombre: 'Dibujo Industrial', id: 'dibujo', creditos: 3, requisitos: [], abre: [] },

  // Séptimo Semestre
  { nombre: 'Procesos Industriales', id: 'procesos', creditos: 3, requisitos: ['transferencia'], abre: [] },
  { nombre: 'Innovación', id: 'innovacion2', creditos: 3, requisitos: [], abre: [], creditosNecesarios: 100 },
  { nombre: 'Marketing', id: 'marketing', creditos: 3, requisitos: ['administracion'], abre: [] },
  { nombre: 'Contabilidad General y de Costos', id: 'contabilidad', creditos: 3, requisitos: ['administracion'], abre: ['ingenieria_eco', 'finanzas'] },
  { nombre: 'Gestión Estratégica y Control de Gestión', id: 'estrategia', creditos: 4, requisitos: ['administracion'], abre: [] },
  { nombre: 'Sustentabilidad en Ingeniería', id: 'sustentabilidad', creditos: 3, requisitos: [], abre: [], creditosNecesarios: 110 },
  { nombre: 'Complementario I', id: 'complementario1', creditos: 3, requisitos: [], abre: [] },

  // Octavo Semestre
  { nombre: 'Planificación y Control de Producción', id: 'planificacion', creditos: 4, requisitos: ['simulacion'], abre: [] },
  { nombre: 'Ingeniería Económica', id: 'ingenieria_eco', creditos: 3, requisitos: ['contabilidad'], abre: ['evaluacion'] },
  { nombre: 'Finanzas', id: 'finanzas', creditos: 4, requisitos: ['contabilidad'], abre: [] },
  { nombre: 'Gestión y Control de la Calidad', id: 'gestion_calidad', creditos: 3, requisitos: ['estadistica_multi'], abre: [] },
  { nombre: 'Tecnologías de la Información', id: 'tecnologia', creditos: 4, requisitos: ['modelacion'], abre: [] },
  { nombre: 'Complementario II', id: 'complementario2', creditos: 2, requisitos: [], abre: [] },

  // Noveno Semestre
  { nombre: 'Diseño de Sistemas de Producción', id: 'diseno_prod', creditos: 3, requisitos: ['optimizacion1'], abre: [], creditosNecesarios: 150 },
  { nombre: 'Evaluación de Proyectos', id: 'evaluacion', creditos: 3, requisitos: ['ingenieria_eco'], abre: ['direccion', 'emprendimiento'] },
  { nombre: 'Gestión Personas y Comportamiento Organizacional', id: 'gestion_personas', creditos: 3, requisitos: ['administracion'], abre: [] },
  { nombre: 'Práctica Profesional', id: 'practica2', creditos: 4, requisitos: [], abre: [] },
  { nombre: 'Electiva I', id: 'electiva1', creditos: 3, requisitos: [], abre: [] },
  { nombre: 'Electiva II', id: 'electiva2', creditos: 3, requisitos: [], abre: [] },
  { nombre: 'Electiva III', id: 'electiva3', creditos: 3, requisitos: [], abre: [] },

  // Décimo Semestre
  { nombre: 'Dirección y Control de Proyectos', id: 'direccion', creditos: 3, requisitos: ['evaluacion'], abre: [] },
  { nombre: 'Taller de Emprendimiento', id: 'emprendimiento', creditos: 3, requisitos: ['evaluacion'], abre: [] },
  { nombre: 'Logística', id: 'logistica', creditos: 3, requisitos: [], abre: [], creditosNecesarios: 150 },
  { nombre: 'Electiva IV', id: 'electiva4', creditos: 3, requisitos: [], abre: [] },
  { nombre: 'Electiva V', id: 'electiva5', creditos: 3, requisitos: [], abre: [] },
  { nombre: 'Electiva VI', id: 'electiva6', creditos: 3, requisitos: [], abre: [] },

  // Onceavo Semestre
  { nombre: 'Memoria de Título', id: 'memoria', creditos: 20, requisitos: [], abre: [] },
];

// Estado actual de cada ramo: "bloqueado", "desbloqueado", o "aprobado"
const estadoRamos = {};

function crearMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  // Inicializar estados
  ramos.forEach(ramo => {
    const tieneCreditosNecesarios = ramo.creditosNecesarios ? true : false;
    estadoRamos[ramo.id] = 'bloqueado';

    if (ramo.requisitos.length === 0 && !tieneCreditosNecesarios) {
      estadoRamos[ramo.id] = 'desbloqueado';
    }
  });

  // Crear elementos y agregar eventos
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo ' + estadoRamos[ramo.id];
    div.id = ramo.id;
    div.innerText = `${ramo.nombre}\n(${ramo.creditos} créditos)`;

    div.addEventListener('click', () => {
      if (estadoRamos[ramo.id] !== 'desbloqueado') return;

      // Marcar como aprobado
      estadoRamos[ramo.id] = 'aprobado';
      div.classList.remove('desbloqueado');
      div.classList.add('aprobado');

      // Calcular créditos aprobados
      const creditosActuales = Object.entries(estadoRamos)
        .filter(([_, estado]) => estado === 'aprobado')
        .map(([id]) => ramos.find(r => r.id === id).creditos)
        .reduce((a, b) => a + b, 0);

      // Desbloquear ramos que dependen del aprobado
      ramos.forEach(posible => {
        if (posible.requisitos.includes(ramo.id)) {
          const requisitosCumplidos = posible.requisitos.every(req => estadoRamos[req] === 'aprobado');
          const cumpleCreditos = !posible.creditosNecesarios || creditosActuales >= posible.creditosNecesarios;

          if (requisitosCumplidos && cumpleCreditos && estadoRamos[posible.id] === 'bloqueado') {
            estadoRamos[posible.id] = 'desbloqueado';
            const divTarget = document.getElementById(posible.id);
            if (divTarget) {
              divTarget.classList.remove('bloqueado');
              divTarget.classList.add('desbloqueado');
            }
          }
        }
      });
    });

    contenedor.appendChild(div);
  });
}

window.onload = crearMalla;
