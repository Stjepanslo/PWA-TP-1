const API_KEY ="73000692cc8567276e4eee5de5d29f3b";
const URL ="https://api.openweathermap.org/data/2.5/";

const button = document.getElementById('sendButton');
const input = document.getElementById('inputCity');
const final = document.getElementById('final');

button.addEventListener('click', ()=> {
    console.log(input.value);
    buscarCiudad(input.value);
});

function buscarCiudad(ciudadBuscada){
    fetch(`${URL}weather?q=${ciudadBuscada}&lang=es&units=metric&appid=${API_KEY}`)
    .then(response => response.json() ) 
    .then(data =>{
    const max =data.main.temp_max;
    const min = data.main.temp_min;
    const hum = data.main.humidity;
    const term = data.main.feels_like;
    const pres = data.main.pressure;
    const vel = data.wind.speed;



    final.innerHTML =`
                <h2 id="name">${input.value}</h2>
                <div class="row">
                    <div class="col-6">
                        <p>Maxima: ${max}</p>
                        <p>Minima: ${min}</p>
                        <p>S. Termica: ${term}</p>
                    </div>
                    <div class="col-6">
                        <p>Humedad: ${hum}%</p>
                        <p>Presion: ${pres}</p>
                        <p>Viento: ${vel}</p>
                    </div>
                    `;
        
})
    
    .catch(function(err){
        console.log("algo salio mal", err);

    
    })

    
}




/*function buscarCiudad(ciudadBuscada){
    const req = new XMLHttpRequest();

    req.open('GET', `${URL}weather?q=${ciudadBuscada}&lang=es&units=metric&appid=${API_KEY}`, true);

    req.onreadystatechange = function(evt){
        if (req.readyState==4) {
            if (req.status==200) {
                console.log(req.response);

                var parseResponse = JSON.parse(req.response);
                cargarDatos(parseResponse);
            }
        } else {
            console.log("Error de ejecucion");
        }
    }
    req.send(null);
}

*/

