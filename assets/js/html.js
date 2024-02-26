const rootD = "../../", ext = ".html"
function getHtml(element){
    let response;
    if(element == "nav"){
        response = document.createElement("nav");
        response.innerHTML = `
            <ul>
                <li><a href="${rootD}index${ext}">Juegos</a></li>
                <li><a href="${rootD}layout${ext}">Page Layout</a></li>
                <li><a href="${rootD}diagramacion${ext}">Diagramacion</a></li>
                <li><a href="${rootD}autores${ext}">Autores</a></li>
            </ul>
        `;
        document.body.appendChild(response)
    }
}

function insertSideContent(element){
    const tag = document.getElementById(element);
    const node = document.createElement("ul")
    node.innerHTML = `
        <li><a href="${rootD}donkie-kong-country${ext}">Donkie Kong Country</a></li>
        <li><a href="${rootD}super-bomberman${ext}">Super Bomberman</a></li>
        <li><a href="${rootD}super-mario-world${ext}">Super Mario World</a></li>
        <li><a href="${rootD}yoshis-island${ext}">Yoshi's Islan</a></li>
        <li><a href="${rootD}zombies-ate-my${ext}">Zombies Ate My Neighbors</a></li>
    `
    tag.appendChild(node)
}