document.addEventListener("DOMContentLoaded", function() {

    const estrellas = [
        '<span class="fa fa-star"></span>',
        '<span class="fa fa-star"></span>',
        '<span class="fa fa-star"></span>',
        '<span class="fa fa-star"></span>',
        '<span class="fa fa-star"></span>',
      ];
      function rellenarEstrellas(estrellas, calificacion) {
        for (let i = 0; i < estrellas.length; i++) {
          if (i >= calificacion) {
            estrellas[i] = '<span class="fa fa-star"></span>';
          } else {
            estrellas[i] = '<span class="fa fa-star checked"></span>';
          }
        }
        estrellas = estrellas.join("");
        return estrellas;
      }

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => {
            
            data.sort((a, b) => b.id - a.id);
            
            const commentsContainer = document.getElementById("comments-container");
            for (let i = 0; i < 10; i++) {
                const comment = data[i];
                const commentElement = document.createElement("div");
                const superEstrellas = rellenarEstrellas(estrellas, mostrarEstrellasAleatorias());
                commentElement.innerHTML = `
                <p><strong>Comentario:</strong></p>
                <p>${superEstrellas}</p>
                <p>${comment.body}</p>
            `;
                commentsContainer.appendChild(commentElement);
            }
        });

const btn_comentario = document.getElementById("btn_comentario");
let selectedRating = 1;
const contenedor_comentarios = document.getElementById("comments-container");

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-rating'));
        console.log(selectedRating);
        highlightStars(selectedRating);
    });
});

function highlightStars(rating) {
    document.querySelectorAll('.star').forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= rating) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'black';
        }
    });
}
btn_comentario.addEventListener('click', function(event) {
    event.preventDefault();
    const description = document.getElementById('comment').value;
    const comentarioDiv = `
        <div>
        <p><strong>Comentario:</strong></p>
        <p>${rellenarEstrellas(estrellas, selectedRating)}</p>
        <p>${description}</p>
        </div>
    `;
    contenedor_comentarios.innerHTML += comentarioDiv;
    document.getElementById('comment').value = '';
    selectedRating = 1;
    highlightStars(selectedRating);

  });
  
});

    // Función para obtener una puntuación aleatoria (solo para simulación)
       const estrellasAleatorias = Math.floor(Math.random()+1);
       
       function mostrarEstrellasAleatorias(){
        console.log(estrellasAleatorias)
        return estrellasAleatorias;
    }