window.addEventListener('DOMContentLoaded', fetchCharackters);

async function fetchCharackters() {
    try {
        const response= await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
        //console.log(response);

        const characters = await response.json();
        console.log(characters);


    } catch (error) {
        console.error('Hiba történt az adatok letöltésekor:',error);
    }

    
}































