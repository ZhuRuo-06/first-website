fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects");

    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}">
        <div class="content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      `;

      card.onclick = () => {
        if (p.url) window.location.href = p.url;
      };

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Gagal load projects:", err));
