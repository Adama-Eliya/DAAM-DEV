import projets from "./projets-data.js"

const grid = document.getElementsByClassName("grid")[0];

projets.forEach(element => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const div1 = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const lienGit = document.createElement("a");
    const lienDemo = document.createElement("a");
    div.appendChild(img);
    div.appendChild(div1);
    div1.appendChild(h3);
    div1.appendChild(p);
    div1.appendChild(lienGit);
    div.className = "card";
    div1.className = "card-content";
    img.src = element.img_src;
    img.alt = element.img_text;
    h3.textContent = element.title;
    p.textContent = element.description;
    lienGit.href = element.lien;
    lienGit.textContent = element.a_text;
    lienDemo.href = element.demo_lien
    lienDemo.textContent = element.demo_text;
    if (element.demo_lien) {
        div1.appendChild(lienDemo);
    }
    grid.appendChild(div);
});