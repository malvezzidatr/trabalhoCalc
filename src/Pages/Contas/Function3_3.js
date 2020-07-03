import React from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function3_3 extends React.Component{
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.derivada = this.derivada.bind(this);
        this.integral = this.integral.bind(this);
    }

    funcao(){
        let k = parseFloat(document.getElementById('valorK').value);
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = Math.pow(k,x);
        if(isNaN(x) || isNaN(k)){
            alert("Digite um valor correto");
        }
        else{
            alert("O resultado da função F(X) = " + k + " ^ " + x + " é igual a " + resultado);
        }
    }

    derivada(){
        let k = parseFloat(document.getElementById('valorK').value);
        let x = parseFloat(document.getElementById('valorX').value);
        let ResultadoLn = Math.log(k);
        let ResultadoExpoente = Math.pow(k, x);
        let ResultadoFinal = ResultadoLn * ResultadoExpoente;
        if(isNaN(x) || isNaN(k)){
            alert("Digite um valor correto");
        }
        else{
            alert("O resultado da derivada de F(X) = " + k + " ^ " + x + " é igual a " + ResultadoFinal )
        }
    }

    integral(){
        let x = parseFloat(document.getElementById('valorX').value);
        let k = parseFloat(document.getElementById('valorK').value);
        let a = parseFloat(document.getElementById('valorA').value);
        let b = parseFloat(document.getElementById('valorB').value);
            if(isNaN(k) || isNaN(a) || isNaN(b)){
                alert('Digite um valor válido');
                }
            else{
                let resultadoB = Math.pow(k, b) / (Math.log(k));
                let resultadoA = Math.pow(k, a) / (Math.log(k));
                let resultadoFinal = resultadoB - resultadoA;
                alert(`O resultado da integral de F(X) = ${k} ^ ${x} é igual a ${resultadoFinal}`);
            }
    }

    render(){
        return(
            <div className='container'>
                <form className='form-container'>
                    <label className='label'>
                    <input className='input_container' type='number' id="valorK" placeholder="Valor de K"/>
                    <input className='input_container' type='number' id="valorX" placeholder="Valor de X" />
                    <div className='definida'>
                        <h3>Para integrais:</h3>
                    </div>
                    <input className='inputcontainer' type='number' id="valorA" placeholder="Valor de a" />
                    <input className='inputcontainer' type='number' id="valorB" placeholder="Valor de b" />
                    <div className='funcao'>
                            <p>F(X) = k ^ x </p>
                    </div>
                    <input type='submit' onClick={this.funcao} value='Função'/>
                    <input type='submit' onClick={this.derivada} value='Derivada'/>
                    <input type='submit' onClick={this.integral} value='Integral'/>
                    </label>
                    <Link to=''>
                    <button className='button-sair'> SAIR </button>
                    </Link>
                    <div className='Contas'>
                        <h5>Função:F(X) = k ^ x </h5>
                        <h5>Derivada:(k^x)*LN(k)</h5>
                        <h5>Integral:((k^b)/LN(k)) - ((k^a)/LN(k))</h5>

                    </div>
                </form>
            </div>
        )
}
}