const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let jogos = []
exibirJogos()

function exibirJogos(){
    console.log(`
    Menu:
    1. Cadastrar jogo
    2. Listar jogo
    3. Editar 
    4. Remover
    5. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarJogo()
                break
            case '2':
                listarJogo()
                break
            case '3':
                editar()
                break
            case '4':
                remover()
                break
            case '5':
                rl.close()
                break
            default:
                console.log("Oção inválida, tente novamente. ")
                exibirJogos()
                break
        }
    })
}

function cadastrarJogo() {
    rl.question('Digite o nome do jogo: ', (jogo) => {
        rl.question('Digite o nome da empresa: ', (empresa) => {
            rl.question('Digite o ano do jogo: ', (ano) => {
                jogos.push({ jogo: jogo, empresa: empresa, ano: ano })
                console.log("Jogo cadastrado. ")
                exibirJogos()
            })
        })
    })
}

function listarJogo() {
    for (var i = 0; i < jogos.length; i++) {
        console.log(jogos[i])
    }
    exibirJogos()
}

function editar() {
    if (jogos.length == 0) {
        console.log('Nenhum jogo encontrado. ')
    } else {
        rl.question('Digite o jogo que você quer editar: ', (numero) => {
            if (numero > 0 && numero <= jogos.length) {
                rl.question('Digite o novo jogo: ', (jogonovo) => {
                    rl.question('Digite a empresa nova: ', (empresanova) => {
                        rl.question('Digite o novo ano: ', (anonovo) => {
                            jogos[numero - 1] = {
                                jogonovo,
                                empresanova,
                                anonovo
                            }
                            console.log('Jogo editado com sucesso. ')
                            exibirJogos()
                        })
                    })
                })
            } else {
                console.log('Jogo inexistente. ')
                exibirJogos()
            }
        })
    }
}

function remover() {
    if (jogos.length == 0) {
        console.log('Nenhum jogo encontrado. ')
    } else {
        console.log('Lista de jogos: ')
        jogos.forEach((jogos, index) => {
            console.log(`${index + 1}. ${jogos.jogo}`)
        })
        rl.question('Digite qual jogo você quer remover: ', (numero) => {
            if (numero > 0 && numero <= jogos.length) {
                jogos.splice(numero - 1)
                console.log('Jogo removido com sucesso. ')
                exibirJogos()
            } else {
                console.log('Jogo inexistente. ')
                exibirJogos()
            }
        })
    }
}