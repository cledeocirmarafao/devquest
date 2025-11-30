function sendMessage(userName: string, isLogged: boolean) {
   console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
}

const userName = "Marafa"
const isLogged = true

sendMessage(userName, isLogged)

// Para compilar: tsc index.ts --target es6
// Ou configurar o tsconfig.json com "target": "es6" e rodar tsc
