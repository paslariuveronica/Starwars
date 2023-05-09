fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
    const films = data.films;
    const filmList = document.getElementById("film-list");

    films.forEach((film) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      const poster = document.createElement("img");
      const title = document.createElement("h2");

      link.href = `filmDetails.html?id=${film.id}`;

      poster.setAttribute("src", film.poster);
      poster.setAttribute("alt", film.title);

      title.textContent = film.title;

      poster.classList.add("poster-image");

      link.appendChild(poster);
      link.appendChild(title);
      listItem.appendChild(link);
      filmList.appendChild(listItem);
    });
  });


