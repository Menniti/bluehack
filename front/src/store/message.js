import { store, types } from 'vuelm'
import axios from 'axios'

const Type = types('ADD_MESSAGE', 'FETCH_MESSSAGES')

const state = {
    messages: [
        // { id:'edc43rf1', owner: 'Zezinho do Tucupi', content: 'Dr., estou com dor nas costas, muita enxaqueca e pernas formigando.', created_at: '11/11/2017', comments: [] }
    ]
}

const updates = {
    [Type.FETCH_MESSSAGES](state, data) {
        return { messages: data }
    },
    
    [Type.ADD_MESSAGE](state, data) {
        return { messages: [...state.messages, data] }
    }
}

const actions = {
 
    sendMessage(data) {
        data.created_at = (new Date()).toLocaleString()
        axios.post('http://bluehack.keuller.com:5000/messages', data).then(resp => this.update(Type.ADD_MESSAGE, data))
    },

    fetch() {
        axios.get('http://bluehack.keuller.com:5000/messages').then(resp => this.update(Type.FETCH_MESSSAGES, resp.data))
    }

}

export default store(state, updates, actions)
