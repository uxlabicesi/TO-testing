let candidates = (info) => {};

window.addEventListener('load', () => {
    candidates = (info) => {
        if (info.length > 0) {
            const candidates = document.querySelector('.reqDetails__candidates');

            candidates.innerHTML = '';
            let aux = 0;
            info.forEach((e) => {
                let candidate = document.createElement('div');
                candidate.classList.add('candidate');
                candidate.setAttribute("id-candidate", info[aux].id) // included for selecting using atrribute 13/04/2020

                let profile = document.createElement('div');
                profile.classList.add('candidate__profile');

                let profilePic = document.createElement('img');
                profilePic.setAttribute('src', "." + e.profilePic);
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
                if (e.telephone > 1) {
                    e.telephone.forEach((number, index) => {
                        if (e.telephone.length === index - 1) {
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

                aux++;
            });
        }
    }

    let candidatesTabButton = document.querySelector('.reqDetails__candidates__tabButton');

    candidatesTabButton.addEventListener('click', () => {
        candidates(candidateSample);
    });

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



});