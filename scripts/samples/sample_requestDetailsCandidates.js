// TODO REMOVE AFTER DEBUG
var candidateSample = [{
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias Morales Martinez ',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias.martinez@candidatos.com.co',
        id: 'id-custom-sample-1',
        selected: true,
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Andrés Arias Martinez',
        job: 'Diseñador Gráfico especialista en mercadeo publicitario digital en redes sociales',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-2',
        selected: true,
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Jose Fabio Arias Montealegue Villa',
        job: 'Diseñador de la comunicación gráfica',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-3'
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Arquitecto visual IU/UX',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-4'
    },
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias Moncalenao santarrosa',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-5',
        selected: true,
    },
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatoscalirecultamiento.com.co',
        id: 'id-custom-sample-6',
        selected: false,
    },
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-7',
        selected: false,
    },
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-8',
        selected: false,
    },
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
            '032 5552334'
        ],
        email: 'fabio.arias@candidatos.com.co',
        id: 'id-custom-sample-9',
        selected: false,
    },
];

/**
 * For more information refers to requestDetailsCandidates.js, fors options documentation
 */

// using option 1, and calling directly 
// updateCandidatesInfo(candidateSample);

// using option 2, and calling directly, this one require to define the trigger or asume the loading issues

let candidatesTabButton = document.querySelector('.reqDetails__candidates__tabButton');

candidatesTabButton.addEventListener('click', () => {
    // if you want to re-write all trigger... using directly the function candidates(), or use the function updateCandidatesInfo() for changing values of candidateInfo (variable)
    // (do-not remove, unless you will re-write trigger and use option 2) require for using the updateCandidatesInfo
    candidates(candidateSample);
});
