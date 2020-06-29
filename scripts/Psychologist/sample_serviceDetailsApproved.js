window.addEventListener('load', () => {

    // TODO REMOVE AFTER DEBUG
    /**
     * The use of requestDetailsInformation function for this section must not have the status property, 
     * and must have the property company.
     */
    var sample = {
        name: 'Diseñador Web',
        remainingTime: 12,
        positionLevel: 'Técnico',
        company: 'HOTEL SHERATON',
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
        profession: ['Diseñador','Ingeniero Multimedia','Diseñador de medios interactivos', 'Ingeniero en sistemas', "ingeniero informatico"],
        knowledge: 'UX, UI, Research, Lean, Agile',
        observations: 'Estamos buscando una persona que trabaje muy bien en equipo y enfoque en metodologías ágiles.',
        skills: ['Desarrollo de prototipos',
                'Definición de Insights',
                'Evaluación de productos',
                'Documentación de procesos',
                'Facilitación de equipos de trabajo'],
        isDraft: false, // optional, maybe needs to be removed
        isCompleted: false,
        levelResponsability: 0, // 0 1 2 --> bajo medio alto
        levelDecision: 0, // 0 1 2 
        peopleInCharge: true,
    }
    
    requestDetailedInformation(sample);
    // this function need to be re-called each selection time
    });
    