fetch("data/members.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("member-list");
    data.forEach(member => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <p>${member.email}</p>
      `;
      container.appendChild(div);
    });
  });
