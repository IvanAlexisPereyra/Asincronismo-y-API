const button = document.getElementById("button");
const input = document.getElementById("input");
const box = document.getElementById("container");
const small = document.getElementById("small");

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        box.innerHTML = renderCard(data);
    } catch(err) {
    }
}

const renderCard = (data) => {
    return `
    <div class="card">
        <h2> ${data.name} </h2>
        <img src=" ${data.sprites.other.home.front_default} " alt=" ${data.name} ">
        <div class="info">
            <div class="info-card">
                <p> Tipo: </p>
                <span> ${data.types} </span>
            </div>
            <div class="info-card">
                <p> Altura: </p>
                <span> ${data.height}/10, "m" </span>
            </div>
            <div class="info-card">
                <p> Peso: </p>
                <span> ${data.weight}/10, "kg" </span>
            </div>
        </div>
    </div>
    `
}

const handleClick = () => {
    const value = input.value;
    if(value > 1292) {
    small.textContent = "El numero de pokémon es inexistente";
    box.innerHTML = "";
    }
    fetchData(value);
    small.textContent = "";
}

const init = () => {
    button.addEventListener("click", handleClick());
};

init()