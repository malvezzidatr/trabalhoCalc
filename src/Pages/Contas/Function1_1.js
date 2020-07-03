import React,{} from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function1_1 extends React.Component{

    //fazer integrais
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.derivada = this.derivada.bind(this);
        this.integral = this.integral.bind(this);

    }

    funcao(){

        let k = parseFloat(document.getElementById('valorK').value);
        let resultado = k;
            if(isNaN(k)){
                alert("Digite um valor correto")
            }
                    else{
                        alert('Resultado da função f(X) = ' + k + ' é igual ' + resultado)
                }
            }
        
            
  
    derivada(){
        let k = parseFloat(document.getElementById('valorK').value);
        let resultado = 0;
            if(isNaN(k)){
                alert('Digite um valor correto');
            }
            else{
                alert("Resultado da derivada de f(X) = " + k + " é igual a " + resultado);
            }
    }

        integral(){
            //kdx = k.x

            let k = parseFloat(document.getElementById('valorK').value);
            let a = parseFloat(document.getElementById('valorA').value);
            let b = parseFloat(document.getElementById('valorB').value);
                if(isNaN(k) || isNaN(a) || isNaN(b)){
                    alert('Digite um valor válido');
                }
                else{
                    let resultadoB = k * b;
                    let resultadoA = k * a;
                    let resultadorFinal = resultadoB - resultadoA;
                    alert(`Resultado da integral de F(x) = ${k} é igual a ${resultadorFinal}`);

                }

        }

    render(){
        return(
            <div className='container'>
                <form className='form-container'>
                    <label className='label'>
                    <input className='input_container'  step='any' id="valorK" placeholder="Valor de K"/>
                    <input className='input_container' type='number' id="valorX" placeholder="Valor de X" />
                    <div className='definida'>
                        <h3>Para integrais:</h3>
                    </div>
                    <input className='inputcontainer' type='number' id="valorA" placeholder="Valor de a" />
                    <input className='inputcontainer' type='number' id="valorB" placeholder="Valor de b" />
                    <div className='funcao'>
                            <p>F(X) = k </p>
                    </div>
                    <input type='submit' onClick={this.funcao} value='Função'/>
                    <input type='submit' onClick={this.derivada} value='Derivada'/>
                    <input type='submit' onClick={this.integral} value='Integral'/>
                    </label>
                    <Link to=''>
                    <button className='button-sair'> SAIR </button>
                    </Link>
                    <div className='Contas'>
                        <h5>Função: F(X) = K</h5>
                        <h5>Derivada: 0 </h5>
                        <h5>Integral: k*b - k*a </h5>
                    </div>
                </form>
            </div>
        )
    }
}