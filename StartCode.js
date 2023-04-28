const prompt = require('prompt-sync')();
const Contato_telrfônico = require('./Contato_telrfônico');



// CRIAR CELULAR
async function criarContato_telrfônico() {
  const contato_telrfônico = {};
  contato_telrfônico.cpf = prompt('CPF: ');
  contato_telrfônico.nome = prompt('Nome: ');
  contato_telrfônico.espec = prompt('Especialidade: ');
  contato_telrfônico.hora = prompt('Hora do plantão: ');
  contato_telrfônico.dia = parseFloat(prompt('Dia do plantão: '));

  try {
    await Contato_telrfônico.create(contato_telrfônico);
    console.log('contato_telrfônico cadastrado com sucesso.');
  } catch (error) {
    console.log('Erro ao cadastrar contato_telrfônico:', error);
  }
}



// LISTAR Contato_telrfônico
async function listarContato_telrfônico() {
  try {
    const contato_telrfônico = await Contato_telrfônico.findAll();
    console.log('Lista de contato_telrfônico:');
    contato_telrfônico.forEach((contato_telrfônico) => {
      console.log(`CPF: ${contato_telrfônico.cpf}, Nome: ${contato_telrfônico.nome}, Especialidade: ${contato_telrfônico.espec}, Hora: ${contato_telrfônico.hora}, Dia: ${contato_telrfônico.dia}`);
    });
  } catch (error) {
    console.log('Erro ao buscar contato_telrfônico:', error);
  }
}

// BUSCAR Contato_telrfônico
async function buscarContato_telrfônico() {
  const contato_telrfônicocpf = prompt('CPF do contato_telrfônico: ');

  try {
    const contato_telrfônico = await Contato_telrfônico.findByPk(contato_telrfônicocpf);
    console.log(`CPF: ${contato_telrfônico.cpf}, Nome: ${contato_telrfônico.nome}, Especialidade: ${contato_telrfônico.espec}, Hora: ${contato_telrfônico.hora}, Dia: ${contato_telrfônico.dia}`);
  } catch (error) {
    console.log('Erro ao buscar Contato_telrfônico:', error);
  }
}



// ATUALIZAR Contato_telrfônico
async function atualizarContato_telrfônico() {
  const contato_telrfônicocpf = prompt('CPF do contato_telrfônico: ');

  try {
    const contato_telrfônico = await Contato_telrfônico.findByPk(contato_telrfônicocpf);
    contato_telrfônico.nome = prompt('Nome: ');
    contato_telrfônico.espec = prompt('Especialidade: ');
    contato_telrfônico.hora = prompt('Hora: ');
    contato_telrfônico.dia = parseFloat(prompt('Dia: '));
    await contato_telrfônico.save();
    console.log('Contato_telrfônico atualizado com sucesso.');
  } catch (error) {
    console.log('Erro ao atualizar Contato_telrfônico:', error);
  }
}

// DELETAR Contato_telrfônico
async function deletarContato_telrfônico() {
  const contato_telrfônicocpf = prompt('CPF do contato_telrfônico: ');

  try {
    const contato_telrfônico = await Contato_telrfônico.findByPk(contato_telrfônicocpf);
    await contato_telrfônico.destroy();
    console.log('Médico deletado com sucesso.');
  } catch (error) {
    console.log('Erro ao deletar médico:', error);
  }
}



// MENU DO PROMPT
async function menu() {
    let opcao = -1;
  
    while (opcao !== '0') {
      console.log('\n----- MENU -----');
      console.log('1. Criar cadastro de contato_telrfônico');
      console.log('2. Listar contato_telrfônico');
      console.log('3. Buscar contato_telrfônico');
      console.log('4. Atualizar contato_telrfônico');
      console.log('5. Deletar contato_telrfônico');
      console.log('0. Sair');
  
      opcao = prompt('Opção: ');
  
      switch (opcao) {
        case '1':
          await criarCelular();
          break;
        case '2':
          await listarCelulares();
          break;
        case '3':
          await buscarCelular();
          break;
        case '4':
          await atualizarCelular();
          break;
        case '5':
          await deletarCelular();
          break;
        case '0':
          console.log('Saindo...');
          break;
        default:
          console.log('Opção inválida.');
          break;
      }
    }
  }
  
  menu();
  