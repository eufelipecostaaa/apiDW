const selectRacas = document.querySelector("#selectRacas");
const botaoSelecionar = document.querySelector("button");

window.addEventListener("load", () => {
    getListaRacas();
});
const getListaRacas = async () => {

    try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();

        if (res.ok) {
            let objRacas = Object.keys(data.message);


            objRacas.forEach(raca => {
                    let opcaoRaca = `
            <option value="${raca}">${raca}</option>
            `;
                    selectRacas.innerHTML += opcaoRaca;
                });
            }
        } catch (error) { }
    };

    botaoSelecionar.addEventListener("click", async () => {
        try{
        const res = await fetch(`https://dog.ceo/api/breed/${selectRacas.value}/images/random"`);
        const data = await res.json();

        let img = document.querySelector("img#imgRaca");
        if(res.ok){
            img.src = data.message;
        }
    }catch(error){
        console.log(error);
    }
    });