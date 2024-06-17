const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let maxSalario = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. listar funcionários
    3. Maior salário
	4. Editar 
	5. Remover
    6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
                listarFuncionarios()
                break
             case'3':
            	maiorSalario()
                break
            case'4':
				editar()
				break
			case'5':
				remover()
				break
			case'6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionarios(){
	for (var i = 0; i < funcionarios.length; i++){
		console.log(funcionarios[i])
	}
	exibirMenu()
}

function maiorSalario(){
	if (funcionarios.length == 0) {
		console.log('Nenhum funcionário encontrado. ')
	}
	for (var i = 0; i < funcionarios.length; i++){
		if (funcionarios[i].salario > maxSalario){
			maxSalario = funcionarios[i].salario
		}
	}
	console.log(`o salário maxímo é: ${maxSalario}. `)
	exibirMenu()
}
function remover(){
	if(funcionarios.length == 0) {
		console.log('Nenhum funcionário encontrado. ')
	} else{
		console.log('lista de funcionários: ')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios}`)
		})
		rl.question('Digite qual funcionário você quer remover: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				funcionarios.splice(numero - 1)
				console.log('Funcionário removido com sucesso. ')
				exibirMenu()
			} else {
				console.log('Funcionário inexistente. ')
				exibirMenu()
			}
		})			
		
	}
}
function editar() {
	if (funcionarios.length == 0) {
		console.log('Nenhum funcionário encontrado. ')
	} else{
		rl.question('Digite o funcionário que você quer editar: ', (numero) => {
			if (numero > 0 && numero <= funcionarios.length) {
				rl.question('Digite o novo nome: ', (nomenovo) => {
					rl.question('Digite o novo cargo: ', (cargonovo) => {
						rl.question('Digite o novo salário: ', (salarionovo) => {
							funcionarios[numero - 1] = {
								nomenovo,
								cargonovo,
								salarionovo
							}
							console.log('Funcionário editado com sucesso. ')
							exibirMenu()
						})
					})
				})
			} else {
				console.log('Funcionário inexistente. ')
				exibirMenu()
			}
		})
	}
}