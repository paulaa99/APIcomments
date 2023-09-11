document.addEventListener("DOMContentLoaded", function() {

    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => {
            
            data.sort((a, b) => b.id - a.id);
            
            const commentsContainer = document.getElementById("comments-container");
            for (let i = 0; i < 10; i++) {
                const comment = data[i];
                const commentElement = document.createElement("div");
                commentElement.innerHTML = `
                    <p><strong> Comentario:
                    <br> </strong> ${comment.body}</p>
                `;
                commentsContainer.appendChild(commentElement);
            }
        });
});
