
document.addEventListener('DOMContentLoaded', () => {
    // Busca todos los contenedores con la clase "sala"
    const salaContainers = document.querySelectorAll('.sala');

    salaContainers.forEach((container, index) => {

        // Lee las configuraciones desde atributos data (o usa los valores por defecto)
        const columnas = container.dataset.columns ? parseInt(container.dataset.columns) : 15;
        const filas = container.dataset.rows ? parseInt(container.dataset.rows) : 10;

        // Genera las filas y butacas dentro del contenedor
        crearSala(container, columnas, filas);

        const totalButacas = container.querySelectorAll('i').length;
        const redButacas = container.querySelectorAll('i.text-red-500').length;
        const butacasDisponibles = totalButacas - redButacas;

        // Si hay uno o varios elementos con la clase "disponibles" dentro de la sala, actualízalos
        const butacasDisponiblesElements = container.querySelectorAll('.disponibles');
        butacasDisponiblesElements.forEach(elem => {
            elem.innerHTML = `Butacas disponibles: ${butacasDisponibles}`;
        });
    });
});

function crearSala(container, columnas, filas) {
    for (let i = 0; i < filas; i++) {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('fila'); // Puedes usar esta clase para aplicar estilos a la fila

        for (let j = 0; j < columnas; j++) {
            const butaca = document.createElement('i');
            butaca.classList.add('fa-solid', 'fa-couch', 'p-1', 'text-green-600', 'cursor-pointer');
            
            // Simula butacas ocupadas al azar
            if (Math.random() > 0.8){
                butaca.classList.remove('text-green-600');
                butaca.classList.add('text-red-500');
            }
            
            // Evento para cambiar el estado de la butaca al hacer clic
            butaca.addEventListener('click', () => {
                if(butaca.classList.contains('text-green-600')){
                    butaca.classList.remove('text-green-600');
                    butaca.classList.add('text-red-500');                      
                } else {
                    butaca.classList.remove('text-red-500');
                    butaca.classList.add('text-green-600');
                }
            });

            filaDiv.appendChild(butaca);
        }
        container.appendChild(filaDiv);
    }
}

