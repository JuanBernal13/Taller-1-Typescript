import { Serie } from './serie.js';

import { series } from './dataSeries.js';
const coursesTbody: HTMLElement = document.getElementById('peliculas')!; // Nodo tbody que tiene el id="courses"

function renderPeliculasInTable(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td">${s.id}</td>
                           <td id="TituloPelicula">${s.titulo}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
                           
    coursesTbody.appendChild(trElement);
  });
}

function promedioTemporadaSeries(series: Serie[]): void {
   
    var suma: number =0;
    const parrafo: HTMLElement = document.getElementById('col1')!; // Nodo tbody que tiene el id="courses"

    series.forEach(s => {
        suma = suma + s.temporadas
    })

    suma = suma/series.length;
    let pElement= document.createElement("p")
    pElement.innerHTML =`Cantidad de temporadas promedio: ${suma}`;

    parrafo.appendChild(pElement);

}
renderPeliculasInTable(series);
promedioTemporadaSeries(series);
