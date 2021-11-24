const conexao = require ('../infraestrutura/conexao')

class Atendimento {
    adiciona (atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro) => {
            if (erro) {
                console.log('erro')
            } else {
                console.log ('resultados')
            }
        })
    }
}