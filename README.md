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
    <div class="request__status request__status--waiting"></div>
    <div class="request__status request__status--inactive"></div>
  </div>

  <p class="request__state request__status--waiting">En espera de selección </p>
</div>
~~~

**Clase** .request__status--completed

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/request.png)

**Clase** .request__status--waiting

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestWaiting.png)

**Clase** .request__status--inactive

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestInactive.png)

**Clase** .request__status--draft

![Solicitud](https://github.com/uxlabicesi/TO-testing/blob/master/README%20images/requestDraft.png)



