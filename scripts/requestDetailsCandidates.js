candidates = (info) => {
    if(info.length > 0) {
        const candidates = document.querySelector('.reqDetails__candidates');

        candidates.innerHTML = '';

        info.forEach((e) => {
            let candidate = document.createElement('div');
            candidate.classList.add('candidate');

            let profile = document.createElement('div');
            profile.classList.add('candidate__profile');

            let profilePic = document.createElement('img');
            profilePic.setAttribute('src', "."+e.profilePic);
            profilePic.classList.add('candidate__profileImg');
            profile.appendChild(profilePic);

            let profileTitles = document.createElement('div')
            profileTitles.classList.add('candidate__profileTitles');
            
            let candidateName = document.createElement('h2');
            candidateName.classList.add('candidate__profileTitlesName');
            candidateName.innerHTML = e.name;
            profileTitles.appendChild(candidateName);

            let candidateJob = document.createElement('h3');
            candidateJob.classList.add('candidate__profileTitlesJob');
            candidateJob.innerHTML = e.job;
            profileTitles.appendChild(candidateJob);
            profile.appendChild(profileTitles);
            candidate.appendChild(profile);

            let candidateInfo = document.createElement('div');
            candidateInfo.classList.add('candidate__info');

            let cel = document.createElement('h2');
            cel.classList.add('candidate__infoCel');
            if(e.telephone > 1) {
                e.telephone.forEach((number, index) => {
                    if(e.telephone.length === index-1) {
                        cel.innerHTML += number;
                    } else {
                        cel.innerHTML += number + ' / ';
                    }
                });
            } else {
                cel.innerHTML = e.telephone[0];
            }
            candidateInfo.appendChild(cel);

            let email = document.createElement('h3');
            email.classList.add('candidate__infoEmail');
            email.innerHTML = e.email;
            candidateInfo.appendChild(email);
            candidate.appendChild(candidateInfo);

            let btn = document.createElement('button');
            btn.classList.add('btn', 'btn--noFill', 'candidate__btn');
            btn.innerHTML = 'Ver detalles';
            btn.addEventListener('click', () => {
                window.location.href = './dashboard_candidateDetails.html';
            });
            candidate.appendChild(btn);

            candidates.appendChild(candidate);
        });
    }
}

var candidateSample = [
    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
                    '032 5552334'],
        email: 'fabio.arias@candidatos.com.co',
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
                    '032 5552334'],
        email: 'fabio.arias@candidatos.com.co',
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
                    '032 5552334'],
        email: 'fabio.arias@candidatos.com.co',
    },

    {
        profilePic: '/resources/imgPerfil.jpg',
        name: 'Fabio Arias M',
        job: 'Diseñador Gráfico',
        telephone: ['+57 (300) 8200838',
                    '032 5552334'],
        email: 'fabio.arias@candidatos.com.co',
    },
];
