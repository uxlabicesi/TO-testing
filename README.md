# Talentos Online

## Componentes


### Loader
~~~
<div class="loader__container loader__container--active">
  <div class="loader">Cargando...</div>
</div>
~~~
**Clase** .loader__container--active //Remover esta clase hace que el loader no se muestre.
![Loader](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/loader.png)

### Inputs
**Clase** .textInput__container

![Input de texto](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/TextInput.png)

**Clase** .textInput__container--search

![Input de texto](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/TextInputSearch.png)

**Clase** .textInput__container--focused

![Input de texto](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/TextInputActive.png)


### Botones
**Clase** .btn

![Botón](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/button.png)

**Clase** .btn--large .btn--blue

![Botón](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/buttonBlue.png)

**Clase** .btn--Xlarge

![Botón](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/buttonLarge.png)

**Clase** .btn--add

![Botón](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/buttonadd.png)

**Clase** .btn--inactive

![Botón](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/buttonLargeInactive.png)


### Solicitudes
~~~
<div class="request">
  <div class="request__title">
    <h2 class="request__job">Diseñador UX</h2>
    <p class="request__time">Faltan 6 días</p>
  </div>
               
  <div class="request__information">
    <p>Santiago de Cali</p>
    <p>Termino fijo a un año</p>
    <p>Lunes a Viernes</p>
    <p>Solicitado: <span>25/03/2020</span></p>
  </div>

  <h4 class="request__price">2'500.000 COP</h4>
 
  <div class="request__statusBar">
    <!-- 
    A estos divs se les coloca los modificadores dependiento de su estado 
    Completado: request__status--completed
    En espera: request__status--waiting
    Inactivo: request__status--incomplete
    Borrador: request__status--draft
    -->
    <div class="request__status request__status--completed"></div>
    <div class="request__status request__status--completed"></div>
    <div class="request__status request__status--completed"></div>
    <div class="request__status request__status--green"></div>
    <div class="request__status request__status--inactive"></div>
  </div>

  <p class="request__state request__status--waiting">En espera de selección </p>
</div>
~~~

**Clase** .request__status--completed

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/request.png)

**Clase** .request__status--green

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestWaiting.png)

**Clase** .request__status--yellow

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestYellow.png)

**Clase** .request__status--inactive

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestInactive.png)

**Clase** .request__status--draft

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestDraft.png)

Para crear una tarjeta de solicitud se debe utilizar la función createRequest en /scripts/createRequest.js.
La función recibe un JSON con la siguiente estructura:

{       
  job: **String** con el nombre del cargo, <br />
  time: **Número** de días faltantes, <br />
  cities: **Arreglo** con el nombre de las ciudades, <br />
  length: **String** Duración del contrato, ej: 'Término fijo a un año', <br />
  days: **String** Días de trabajo, ej: 'Lunes a Viernes', <br />
  date: **String** que contiene la fecha en formato DD/MM/YYYY ej. 25/03/2020, <br />
  payment: **String** Pago con formato, ej: '2\'500.000 COP', <br />
  status: **Arreglo** con dos números, el primero indica la etapa del proceso en la que se encuentra la solicitud, es un número entre 0   y 4; y el segundo es 0 o 1, 0 si el usuario aún debe realizar alguna acción y 1 si no debe realizar ninguna acción, <br />
  draft: **booleano** indicando si se trata de un borrador, true indica que es borrador.<br />
  finished: **booleano** indicando si se trata de una solicitud terminada, true indica que la solicitud finalizó <br />
}

**Clase** .popUp

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/popUp.png)

Para crear un popUp se debe utilizar la función createPopUp en /scripts/createPopUp.js.
La función recibe un JSON con la siguiente estructura:

{

  title: **String** texto para el titulo principal, <br />
  text: **String** texto descriptivo, <br />
  btn:  **String** texto para el botón principal, <br />
  goTo: **String** Url para direccionar con el botón, <br />
  goBack: **String** Texto para opción secundaria, <br />
  returnTo: **String** Url para opción secundaria <br />
  
}

Además recibe la ruta del popUp como segundo parametro, la cual debe ser = ".popUp"




