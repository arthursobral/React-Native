import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ParImpar from './components/ParImpar';
// import Pai from "./components/indireta/Pai"
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro'
// import CompPadrao,{ Comp1, Comp2 } from './components/Multi'

export default () => {
    return (
        <SafeAreaView style = {style.App}>
            <Mega qtdeNumeros = {7}/>
            {/* 
            <FlexboxV4/>
            <FlexboxV3/>
            <FlexboxV2/>
            <FlexboxV1/>
            <DigiteSeuNome/>
            <ListaProdutosV2/>
            <ListaProdutos/>
            <ParImpar num={1}/>
            <Botao/>
            <Pai/>
            <Contador inicial = {0}/>
            <Titulo principal = "Cadastro" segundario = "Tela de Cadastro"></Titulo>
            <Aleatorio min={1} max={20}/> 
            <MinMax min={3} max={4}/>
            {/* <CompPadrao/>
            <Primeiro/>
            <Comp1/>
            <Comp2/> 
            */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});