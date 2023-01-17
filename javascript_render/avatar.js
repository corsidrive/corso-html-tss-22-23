function renderAllievo(allievo) {
    return "<div class='card__allievo'>"+allievo+"</div>"
}

// function renderAvatar(allievo,index) {
//     const html = "<div class=\"avatar\">" +
//     '<img  class="avatar__img"  src="https://i.pravatar.cc/150?img='+index+'" alt="'+allievo+'">'+
//     '<div class="avatar__user"> '+allievo+'</div>' +
//     '</div>' 
//     return html
// }


function renderAvatar(allievo,i) {
   return  `
    <div class="avatar">
        <img  class="avatar__img"  src="https://i.pravatar.cc/150?img=${i+1}" alt="${allievo}">
        <div class="avatar__user"> ${allievo}  </div>
    </div>
    `
}

/**
 * @param {string} selector selettore css dove "apperderò" html generato
 * @param {array<string>} data  array di strighe
 * @param {function} renderFunction funzione che genera html 
 */
function renderList(selector,data,renderFunction){
    // MAP --> trasforma gli array
    const html = data.map(renderFunction)
    // join ARRAY --> STRINGA
    const htmlFinale = html.join("\n")
    const aula = document.querySelector(selector)

    aula.innerHTML = htmlFinale
}


renderList("#aula",allievi,renderAvatar)
renderList("#aula_2",allievi,renderAllievo)




