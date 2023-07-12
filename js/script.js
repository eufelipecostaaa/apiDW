const containerPosts = document.querySelector(".container-posts");

window.addEventListener("load", () => {
getPosts();
});

const getPosts = async () => {
    
    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        if (res.ok) {
            data.forEach((post) => {
                let card = `
                <div class="post">
                    <h2 class="post-titulo"> ${post.title}</h2>
                    <p class="post-descricao"> ${post.body}</p>
                    <div class="container-post-botao">
                        <button idPost = ${post.id}> Excluir </button>
                        <button> Ver Comentários</button>
                    </div>
                </div>`;
                containerPosts.innerHTML += card;
            });
        }
    } catch (error) {
        console.log(error);
    }
}