import { ADD_CONTATO } from "./contatos-actions";
import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
};

var cont = 10;

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (
                (cont).toString(),
                action.dadosContato.nomeContato, 
                action.dadosContato.telefone,
                action.dadosContato.imagemURI
            );
            cont = cont + 2;
            return {
                contatos: estado.contatos.concat(contato)
            }
        default:
            return estado;
    }
}