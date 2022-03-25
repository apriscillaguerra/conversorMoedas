'use strict'

function Converter() {
    let valorInicial = parseFloat(document.querySelector('#valor').value)
    let moedaAtual = document.querySelector('#inicial')
    let moedaFinal = document.querySelector('#final')

    let opcao1 = moedaAtual.options[moedaAtual.selectedIndex].value
    let opcao2 = moedaFinal.options[moedaFinal.selectedIndex].value

    let res = 0

    let resFinal = document.querySelector('.valorConvertido')

    //Conversor a partir do REAL
    if (((opcao1 === 'real') && (opcao2 === 'dolar')) || ((opcao1 === 'real') && (opcao2 === 'euro')) || ((opcao1 === 'real') && (opcao2 === 'bitcoin'))) {
        //Dolar
        if (opcao2 === 'dolar') {
            res = (valorInicial * 0.20)
            resFinal.innerHTML = `O valor R$${valorInicial.toFixed(2)}, em dolar é US$${res.toFixed(2)}.`
        }
        //Euro
        else if (opcao2 === 'euro') {
            res = (valorInicial * 0.18)
            resFinal.innerHTML = `O valor R$${valorInicial.toFixed(2)}, em euro é €${res.toFixed(2)}.`
        }
        //Bitcoin
        else if (opcao2 === 'bitcoin') {
            res = (valorInicial * 0.0000051)
            resFinal.innerHTML = `O valor R$${valorInicial.toFixed(2)}, em bitcoin é ₿${res}.`
        }

    }
    //Conversor a partir do DOLAR
    else if (((opcao1 === 'dolar') && (opcao2 === 'real')) || ((opcao1 === 'dolar') && (opcao2 === 'euro')) || ((opcao1 === 'dolar') && (opcao2 === 'bitcoin'))) {
        //Real
        if (opcao2 === 'real') {
            res = (valorInicial * 5.06)
            resFinal.innerHTML = `O valor US$${valorInicial.toFixed(2)}, em real é R$${res.toFixed(2)}.`
        }
        //Euro
        else if (opcao2 === 'euro') {
            res = (valorInicial * 0.92)
            resFinal.innerHTML = `O valor US$${valorInicial.toFixed(2)}, em euro é €${res.toFixed(2)}.`
        }
        //Bitcoin
        else if (opcao2 === 'bitcoin') {
            res = (valorInicial * 0.000026)
            resFinal.innerHTML = `O valor US$${valorInicial.toFixed(2)}, em bitcoin é ₿${res}.`
        }
    }
    //Conversor a partir do EURO
    else if (((opcao1 === 'euro') && (opcao2 === 'real')) || ((opcao1 === 'euro') && (opcao2 === 'dolar')) || ((opcao1 === 'euro') && (opcao2 === 'bitcoin'))) {
        //Real
        if (opcao2 === 'real') {
            res = (valorInicial * 5.52)
            resFinal.innerHTML = `O valor €$${valorInicial.toFixed(2)}, em real é R$${res.toFixed(2)}.`
        }
        //Dolar
        else if (opcao2 === 'dolar') {
            res = (valorInicial * 1.09)
            resFinal.innerHTML = `O valor €$${valorInicial.toFixed(2)}, em dolar é US$${res.toFixed(2)}.`
        }
        //Bitcoin
        else if (opcao2 === 'bitcoin') {
            res = (valorInicial * 0.000028)
            resFinal.innerHTML = `O valor €$${valorInicial.toFixed(2)}, em bitcoin é ₿${res}.`
        }
    }
    //Conversor a partir do BITCOIN
    else if (((opcao1 === 'bitcoin') && (opcao2 === 'real')) || ((opcao1 === 'bitcoin') && (opcao2 === 'dolar')) || ((opcao1 === 'bitcoin') && (opcao2 === 'euro'))) {
        //Real
        if (opcao2 === 'real') {
            res = (valorInicial * 195150.04)
            resFinal.innerHTML = `O valor ₿${valorInicial.toFixed(2)}, em real é R$${res.toFixed(2)}.`
        }
        //Dolar
        else if (opcao2 === 'dolar') {
            res = (valorInicial * 38715.70)
            resFinal.innerHTML = `O valor ₿${valorInicial.toFixed(2)}, em dolar é US$${res.toFixed(2)}.`
        }
        //Euro
        else if (opcao2 === 'euro') {
            res = (valorInicial * 35380.97)
            resFinal.innerHTML = `O valor ₿${valorInicial.toFixed(2)}, em euro é €$${res.toFixed(2)}.`
        }
    }
}