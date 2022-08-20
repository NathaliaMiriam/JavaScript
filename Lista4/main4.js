// ex 1
document.getElementById("estados").onchange = function () {
    localStorage.setItem("estado", document.getElementById("estados").value); // setItem --> p guardar no localStorage
}

if (localStorage.estado) { // 
    document.getElementById("estados").value = localStorage.estado;  
} 


// ex 2
//coloca o 0 (zero) a esquerda e transforma em string
function add_left_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

function format_date(timestamp) { // timestamp --> qtd. de segundos 
    var dia = add_left_zero(new Date(timestamp).getDate());
    var mes = add_left_zero(new Date(timestamp).getMonth() + 1); // + 1 --> pois os meses vão de 0 (Jan) a 11 (Dez)
    var ano = add_left_zero(new Date(timestamp).getFullYear());
    return dia + "-" + mes + "-" + ano;
}

document.getElementById("confirmar_pedido").onclick = function () {

    var selection = document.getElementById("envios").value;

    if (selection == "escolha") {
        alert("Escolha um modelo de envio");
    } else {
        if (selection == "normal") {
            var dias_entrega = 18;
        } else if (selection == "express") {
            var dias_entrega = 12;
        }

        var data_envio = new Date().getTime();
        var data_entrega = data_envio + (dias_entrega * 86400000) // 86400000 --> milisegundos de um dia

        document.getElementById("data_pedido").innerHTML = format_date(data_envio);
        document.getElementById("data_entrega").innerHTML = format_date(data_entrega);
    }
}


// ex 3
// variáveis numa linha só, separadas por vírgula
var iniciado = false, hora_inicio, hora_atual, tempo_passado, init_cronometro, horas, minutos, segundos, milisegundos;


    //coloca o 0 (zero) a esquerda e transforma em string
    function add_zero_esquerda(number) {
        if (number < 10) {
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    }


document.getElementById("comecar_parar").onclick = function () {

    if (!iniciado) {
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";

        // começa o cronometro
        if (!hora_inicio) {        
        hora_inicio = new Date().getTime();
        } else {
            hora_inicio = new Date().getTime() - tempo_passado;
        }

        init_cronometro = window.setInterval(function() { 

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            horas = Math.floor(tempo_passado / 3600000);  // 3600000 --> qtd. de milisegundos dentro de 1 hora .... Math.floor --> arredonda p baixo
            resto = tempo_passado - (horas * 3600000);

            minutos = Math.floor(resto / 60000); // 60000 --> qtd. de milisegundos dentro de 1 min
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000); // 1000 --> qtd. de milisegundos dentro de 1 seg
            resto -= (segundos * 1000);

            milisegundos = resto; // o que sobrou dos segundos



            document.getElementById("cronometro").innerHTML = add_zero_esquerda(horas) + ':' 
                + add_zero_esquerda(minutos) + ':' + add_zero_esquerda(segundos) + ':' + add_zero_esquerda(milisegundos);

        }, 10); // 10 --> dez milisegundos

    } else {
        // para o cronometro
        window.clearInterval(init_cronometro);
        iniciado = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

// zera o cronometro quando ñ estiver rodando
// document.getElementById("zerar").onclick = function () {
//     if (!iniciado) {
//         iniciado = false;
//         hora_inicio = 0;
//         tempo_passado = 0;
//         document.getElementById("cronometro").innerHTML = "00:00:00 000";
//     }    
// }


// // zera o cronometro não importando o estado dele e para
// document.getElementById("zerar").onclick = function () {
//     window.clearInterval(init_cronometro);
//     iniciado = false;
//     hora_inicio = 0;
//     tempo_passado = 0;
//     document.getElementById("cronometro").innerHTML = "00:00:00 000";    
// }


// zera o cronometro e continua girando
document.getElementById("zerar").onclick = function () {
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
}


// ex 4
var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

function valor_a_pagar(veiculo) {

    switch(veiculo.categoria) {
        case '1':
            return 11.22;
            break;

        case '2':
            return 22.45;
            break;

        case '3':
            return 16.88;
            break;

        case '4':
            return 33.65;
            break;

        default:
            console.log('Veiculo de placa ' + veiculo.placa + ' não fez pag. por erro de categoria (' + veiculo.categoria + ')');
            return 0;
    }
}


var total_arrecadado = 0;

for (var a = 0; a < carros.length; a++) {
    total_arrecadado += valor_a_pagar(carros[a]);
}

document.getElementById("faturamento_total").innerHTML = total_arrecadado.toFixed(2);
