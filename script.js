var li = document.querySelector('#lista ul')
var item = document.getElementById('item')
var adicionar = document.querySelector('#lista button')
var lista = [ 
    'Jogo de panelas ',
    'Faqueiro ',
    'Porta copo '
]

function lerLista() {
    li.innerHTML=""
    for (list of lista) {
        var itemLista = document.createElement('li')
        var texto = document.createTextNode(list)
        var del =  document.createElement('a')
        var delTexto = document.createTextNode('[X]')
        var pos = lista.indexOf(list)

        del.setAttribute('href', '#')
        del.setAttribute('onClick', 'deletarItem(' + pos + ')')

        itemLista.appendChild(texto)
        li.appendChild(itemLista)
        del.appendChild(delTexto)
        itemLista.appendChild(del)
    }
}

lerLista()

adicionar.onclick = function() {
    var text = item.value + " "
    lista.push(text)
    item.value = ""
    item.focus()
    lerLista()
}

function deletarItem(pos) {
    lista.splice(pos, 1); //a partir da posição indicada, deletar 1.
    lerLista();
}