const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get("id");

fetch(`db.json`)
  .then((res) => res.json())
  .then((data) => {
    const films = data.films;
    const film = films.find((f) => f.id === parseInt(filmId));

    const filmDetails = document.getElementById("film-details");
    const poster = document.createElement("img");
    const title = document.createElement("h2");
    const openingCrawl = document.createElement("p");
    const director = document.createElement("p");
    const producer = document.createElement("p");
    const releaseDate = document.createElement("p");

    poster.setAttribute("src", film.poster);
    poster.setAttribute("alt", film.title);

    title.textContent = film.title;
    openingCrawl.textContent = film.opening_crawl;
    director.textContent = `Directed by ${film.director}`;
    producer.textContent = `Produced by ${film.producer}`;
    releaseDate.textContent = `Released on ${film.release_date}`;

    poster.classList.add("poster-image");

    filmDetails.appendChild(poster);
    filmDetails.appendChild(title);
    filmDetails.appendChild(openingCrawl);
    filmDetails.appendChild(director);
    filmDetails.appendChild(producer);
    filmDetails.appendChild(releaseDate);

    document
      .getElementById("delete-film-btn")
      .addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this film?")) {
          deleteFilmFromDb();
        }
      });
    function deleteFilmFromDb() {
      const urlParams = new URLSearchParams(window.location.search);
      const filmId = urlParams.get("id");

      fetch(`http://localhost:3000/films/${filmId}`, {
        method: "DELETE",
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          window.location.href = "index.html";
        })
        .catch(function (error) {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  });
