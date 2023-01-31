const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    let obj = {
        rotas:[{
            rota1: 'Rota Primaria Apresentação do projeto',
            rota2:'Rota secundária: Apresentar a grade de horário do 1ºSem/2023;',
            rota3:'Rota terciária: Apresentar a estrutura (histórico escolar);'
        }]  
    }
    res.render('home', obj);
});

router.get('/rota1', (req, res) =>{
    let obj = {
        materias:[{
            segunda: 'Segunda-Feira: Gestão Ágil de Projetos de Software - 4hs/aula',
            terca: 'Terça-Feira: Banco de Dados - Não relacional - 4hs/aula e Inglês I - 2hs/aula',
            quarta: 'Quarta-Feira: Interação Humano Computador - 2hs/aula e Desenvolvimento Web III - 4hs/aula',
            quinta: 'Quinta-Feira: Algebra Linear - 4hs/aula',
            sexta: 'Técnica de Programação II - 4hs/aula'
        }]  
    }
    res.render('rota1', obj);
});

router.get('/rota2', (req, res) =>{
    let obj = {
        historico:[{
            materia1: 'Algoritmo e Lógica de Programação - Periodo: 2022/1 - Média: 9.4 - Frequência: 95.00% - Aprovado',
            materia2: 'Modelagem de Banco de Dados - Periodo: 2022/1 - Média: 8.6 - Frequência: 91.25% - Aprovado',
            materia3: 'Engenharia de Software I - Periodo: 2022/1 - Média: 8.6 - Frequência: 90.00% - Aprovado',
            materia4: 'Sistemas Operacionais e Redes de Computadores - Periodo: 2022/1 - Média: 7.2 - Frequência: 90.00% - Aprovado',
            materia5: 'Desenvolvimento Web I - Periodo: 2022/1 - Média: 8.7 - Frequência: 82.50% - Aprovado',
            materia6: 'Design Digital - Periodo: 2022/1 - Média: 8.0 - Frequência: 90.00% - Aprovado',
            materia7: 'Banco de Dados – Relacional - Periodo: 2022/2 - Média: 9.1 - Frequência: 90.00% - Aprovado',
            materia8: 'Estrutura de Dados - Periodo: 2022/2 - Média: 7.0 - Frequência: 95.00% - Aprovado',
            materia9: 'Engenharia de Software II - Periodo: 2022/2 - Média: 7.6 - Frequência: 95.00% - Aprovado',
            materia10: 'Técnica de Programação I - Periodo: 2022/2 - Média: 9.6 - Frequência: 85.00% - Aprovado',
            materia11: 'Matemática para Computação - Periodo: 2022/2 - Média: 8.6 - Frequência: 100.00% - Aprovado',
        }]  
    }
    res.render('rota2', obj);
});

module.exports = router;
