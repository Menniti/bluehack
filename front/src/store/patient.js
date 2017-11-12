import { store, types } from 'vuelm'
import axios from 'axios'

const baseUrl = 'http://localhost:5000/requests'
const Type = types('UPDATE_REQUESTS')

const state = {
    patients: [],
    selectedPatient: {}
}

const updates = {
    [Type.UPDATE_REQUESTS](state, data) {
        if (data.fail) {
            return {...state, patients:[] }
        }
        return {...state, patients: data }
    }
}

const actions = {
 
    fetchRequests(id) {
        axios.get(`${baseUrl}/${id}/patient`)
            .then(resp => { this.update(Type.UPDATE_REQUESTS, resp.data) })
            .catch(err => console.warn(err))
    }

}

export default store(state, updates, actions)
