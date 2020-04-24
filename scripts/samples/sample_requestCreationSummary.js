window.addEventListener('load', () => {


// TODO REMOVE AFTER DEBUG
var sample = {
    name: 'Diseñador Web',
    status: [0, 1], // -1, 0 para borradores
    remainingTime: 12,
    positionLevel: 'Técnico',
    cities: ['Santiago de Cali - Valle del Cauca',
             'Popayán, Cauca',
             'Palmira, Valle del Cauca'],
    amountPerCity:[10,5,3],
    time: 'Medio tiempo',
    hiring: 'Término indefinido',
    wage: '2\'500.500 COP',
    functions: ['Diseño de interfaz de usuario',
                'Investigación de usuarios',
                'Evaluación de usabilidad',
                'Creación de conceptos',
                'Sustentación de propuestas'],
    academicLevel: 'Universitario',
    profession: 'Diseñador',
    knowledge: 'UX, UI, Research, Lean, Agile',
    observations: 'Estamos buscando una persona que trabaje muy bien en equipo y enfoque en metodologías agiles.',
    skills: ['Desarrollo de prototipos',
            'Definición de Insights',
            'Evaluación de productos',
            'Documentación de procesos',
            'Facilitación de equipos de trabajo'],
    amount: 2,
    subtotal: 1000000,
    discount: 30,
    discountType: 0,
}
requestCreationSummary(sample);
});
