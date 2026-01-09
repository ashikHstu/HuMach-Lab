fetch("data/publications.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("pub-list");
    data.forEach(pub => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${pub.title}</h3>
        <p>${pub.authors}</p>
        <p><i>${pub.journal}</i> (${pub.year})</p>
      `;
      container.appendChild(div);
    });
  });
