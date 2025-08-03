// Podemos adicionar métodos aos Objetos;

let usuario = {
    nome: 'Cledeocir',
    excluir: function(){
        console.log('O usuário ' + this.nome + ' foi excluído.');
    }
}
// O this vamos estudar mais a frente;
usuario.excluir()