const botao = document.getElementById('verificacao')

if (botao.classList.contains('classe-azul')) {
    alert('O elemento possui a classe')
} else {
    alert('O elemento não possui a classe')
}

botao.addEventListener('click', function(){
    if (botao.classList.contains('classe-azul')) {
        botao.classList.remove('classe-azul')
    } else {
        botao.classList.add('classe-azul')
    }

})
