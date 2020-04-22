window.addEventListener('load', () => {

// TODO REMOVE AFTER DEBUG
var candidateSample = [{
    profilePic: '/resources/imgPerfil.jpg',
    name: 'Fabio Arias M',
    job: 'Diseñador Gráfico',
    telephone: ['+57 (300) 8200838',
        '032 5552334'
    ],
    email: 'fabio.arias@candidatos.com.co',
    id: 'id-custom-sample-1'
},

{
    profilePic: '/resources/imgPerfil.jpg',
    name: 'Fabio Arias M',
    job: 'Diseñador Gráfico',
    telephone: ['+57 (300) 8200838',
        '032 5552334'
    ],
    email: 'fabio.arias@candidatos.com.co',
    id: 'id-custom-sample-2'
},

{
    profilePic: '/resources/imgPerfil.jpg',
    name: 'Fabio Arias M',
    job: 'Diseñador Gráfico',
    telephone: ['+57 (300) 8200838',
        '032 5552334'
    ],
    email: 'fabio.arias@candidatos.com.co',
    id: 'id-custom-sample-3'
},

{
    profilePic: '/resources/imgPerfil.jpg',
    name: 'Fabio Arias M',
    job: 'Diseñador Gráfico',
    telephone: ['+57 (300) 8200838',
        '032 5552334'
    ],
    email: 'fabio.arias@candidatos.com.co',
    id: 'id-custom-sample-4'
},
];

/**
 * For more information refers to requestDetailsCandidates.js, fors options documentation
 */

// using option 1, and calling directly 
updateCandidatesInfo(candidateSample);

// using option 2, and calling directly, this one require to define the trigger or asume the loading issues
//candidates(candidateSample);

});