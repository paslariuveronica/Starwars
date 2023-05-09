const addFilmForm = document.querySelector(".add-film-form");

addFilmForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const episodeId = document.querySelector("#episode_id").value;
  const openingCrawl = document.querySelector("#opening_crawl").value;
  const director = document.querySelector("#director").value;
  const producer = document.querySelector("#producer").value;
  const poster = document.querySelector("#poster").value;
  const releaseDate = document.querySelector("#release_date").value;
  const characters = [];
  const planets = [];
  const vehicles = [];
  const species = [];

  const characterList = document.querySelector("#character_list");
  const planetList = document.querySelector("#planet_list");
  const vehicleList = document.querySelector("#vehicle_list");
  const speciesList = document.querySelector("#species_list");

  for (let i = 0; i < characterList.options.length; i++) {
    if (characterList.options[i].selected) {
      characters.push(characterList.options[i].value);
    }
  }

  for (let i = 0; i < planetList.options.length; i++) {
    if (planetList.options[i].selected) {
      planets.push(planetList.options[i].value);
    }
  }

  for (let i = 0; i < vehicleList.options.length; i++) {
    if (vehicleList.options[i].selected) {
      vehicles.push(vehicleList.options[i].value);
    }
  }

  for (let i = 0; i < speciesList.options.length; i++) {
    if (speciesList.options[i].selected) {
      species.push(speciesList.options[i].value);
    }
  }

  const newFilm = {
    title,
    episode_id: episodeId,
    opening_crawl: openingCrawl,
    director,
    producer,
    poster,
    release_date: releaseDate,
    characters,
    planets,
    vehicles,
    species,
  };

  try {
    const response = await fetch("db.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFilm),
    });

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
});
