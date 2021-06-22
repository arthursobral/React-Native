import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';

import MegaNumero from './MegaNumero';

export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    /*
    constructor(props){
        super(props)

        //como primeira solução podemos fazer um bind
        //porque quando vc chama uma funcao ele perde a referencia do objeto 
        //para fazer com q isso nao aconteça se é necessario bindar
        this.alterarQtd = this.alterarQtd.bind(this);
    }
    */

    alterarQtd = (qtd) => {
        this.setState({qtdeNumeros: +qtd})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;

        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo; 
    }

    /*
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
            .sort((a,b) => a - b);
        this.setState({numeros});
    }*/

    gerarNumeros = () => {
        const {qtdeNumeros} = this.state;
        const numeros = [];
        
        for(let i=0; i< qtdeNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros);
            numeros.push(n);
        }

        numeros.sort((a, b) => a-b);
        this.setState({numeros});
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;

        return nums.map(num => {
            return <MegaNumero key={num} num = {num}/>
        })
    }


    render() {
        return (
            <>
                <Text style = {Estilo.fontG}>
                    Gerador de Mega-sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType = {'numeric'}
                    style = {{borderBottomWidth: 1}} 
                    placeholder = "Qtde de numeros"
                    value = {`${this.state.qtdeNumeros}`}
                    //o segundo jeito é fazendo com uma arrow function ao inves de um constructor e um bind
                    onChangeText = {this.alterarQtd}
                />
                <View style={style.botaoGerar}>
                    <Button size="small" title="clique" onPress={this.gerarNumeros}/>
                </View>
                <View style={style.viewNum}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    viewNum: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    botaoGerar:{
        marginTop: 20,
        width: 150,
    }
})