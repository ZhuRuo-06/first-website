fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects");

    projects.forEach(p => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="desc">${p.description}</p>
        <div class="tech">
          ${p.tech.map(t => `<span>${t}</span>`).join("")}
        </div>
        <a href="${p.url}" class="btn">Lihat Project</a>
      `;

      container.appendChild(card);
    });
  });
