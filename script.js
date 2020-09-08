var li = document.querySelector('#lista ul')
var item = document.getElementById('item')
var adicionar = document.querySelector('#lista button')
var lista = [ 
    'Jogo de panelas',
    'Faqueiro',
    'Porta corpo'
]

function lerLista() {
    li.innerHTML=""
    for (list of lista) {
        var itemLista = document.createElement('li')
        var texto = document.createTextNode(list)

        itemLista.appendChild(texto)
        li.appendChild(itemLista)
    }
}

lerLista()


adicionar.onclick = function() {
    var text = item.value
    lista.push(text)
    item.value = ""
    item.focus()
    lerLista()
    

}