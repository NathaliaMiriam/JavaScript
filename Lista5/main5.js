// ex 1 
var funcionario = {
    'nome': "Fernanda Costa",
    'd_nascimento': '1988-10-01',
    'CPF': '111.111.111-11'
};

// de objeto p JSON --> pega o objeto ou array e transforma em string
var funcionario_json = JSON.stringify(funcionario);
console.log(funcionario_json);


// de JSON p objeto --> pega a string e transforma em objeto
var funcionario_obj = JSON.parse(funcionario_json);
console.log(funcionario_obj);
console.log(funcionario_obj.nome);