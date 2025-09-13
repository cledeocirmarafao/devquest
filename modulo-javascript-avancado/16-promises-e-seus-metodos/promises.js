// Oque é uma PROMISE, recapitulando:São objetosno javascript que representa um valor que pode ou não estar disponível no futuro, ou seja uma operação assíncrona e seu valor resultante;
// ESTADOS DAS PROMISES
// PENDING: Estado inicial, nem cumprid nem rejeitada;
//FULFILLED: Significa que a operação foi concluída com sucesso;
// REJECTED: Significa que a operação falhou;

// E por que são tão cruciais?

// Porque permitem escreves códigos assíncronos de maneira mais legível e gerencíavel evitando o callback hell; 

// Quais são os métodos mais usados que vão nos ajudar a tratar promises e APIs? => Promise.all & Promise.allSettlled <

// POR QUE USAR Promise.all ? => Porque queremos que todas as promises retornem ao mesmo tempo quando estiverem prontas, mas temos que tomar cuidado porque se uma das promises falhar, todas as outras falham;
// O Promise.all vai retornar um array com o resultado de cada uma dessas promises;
// Se você precisa que todas elas sejam executadas e você precisa do resultados dessas promises você utiliza o promises.all, agora se você precisa que pelo menos uma delas retorne um resultado ai você pode usar o outro método, o promise.allSettlled. Vai depender muito do caso de uso do seu software e do programa que você estiver escrevendo e da aplicação no caso;
// SE todas as promise.all falharem, qual vai retornar? => A primeira;
// SE passarmos um array vazio, tipo ' promise.all ([ ]) ' Oque retorna? => Vai retornar vazio.

// ------- SIMULAÇÃO DE CHAMADA DE API COMO NO GITHUB ---------/

const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Helena'},
                { id: 2, name: 'Aurora'},
            ])
        }, 2000)
    })
}

const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Repo 1'},
                { id: 2, name: 'Repo 2'},
            ])
        }, 2000)
    })
}

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve([
            {id: 1, name: 'Event 1'},
            {id: 2, name: 'Event 2'}
           ])
        }, 2000)
    })
}

const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ])
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

loadAll()

// POR QUE USAR Promise.allSettled ? => Porque mesmo que uma das promises falhe, ainda temos outras e queremos saber o resultado delas;
// SE uma ou mais promises passadas são rejeitadas vai retornar o resultado de todas as promises e também os seus estados;
// SE todas as promises falharem irá retornar os resultados e os estados, assim como no exemplo acima;

//--- A Estrutura do Promise.allSettled é a mesma do Promise.all;
/*
const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ])
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
*/ 