window.addEventListener('load' ,() => {

    const info = [
        {
            name: 'Fabio Arias',
            job: 'Diseñador Web',
            city: 'Medellín',
            affinity: 100,
            inProcess: true,
            candidate: false,
            url: './candidateDetails.html'
        },
        {
            name: 'Miguel Tulande',
            job: 'Diseñador Web',
            city: 'Cali',
            affinity: 50,
            inProcess: false,
            candidate: false,
        },
        {
            name: 'Mónica Linderos',
            job: 'Diseñador Web',
            city: 'Bucaramanga',
            affinity: 25,
            inProcess: false,
            candidate: false,
        },
        {
            name: 'Esteban Monrroy',
            job: 'Diseñador Web',
            city: 'Medellín',
            affinity: 100,
            inProcess: false,
            candidate: true,
        },
        {
            name: 'Carolina Muñoz',
            job: 'Diseñador Web',
            city: 'Bogotá',
            affinity: 100,
            inProcess: false,
            candidate: true,
        },
        {
            name: 'Viviana Mendez',
            job: 'Diseñador de Interacción',
            city: 'Medellín',
            affinity: 100,
            inProcess: false,
            candidate: true,
        },
        {
            name: 'Maritza Casas',
            job: 'Diseñador UX',
            city: 'Neiva',
            affinity: 100,
            inProcess: false,
            candidate: true,
        },
    ]
    
    createCandidateList(info);
});