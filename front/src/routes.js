import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'components/login'
import Doctor from 'components/doctor'
import Patient from 'components/patient'
import Messages from 'components/message'
import MessageForm from 'components/message/MessageForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  }, {
    path: '/doctors',
    name: 'doctors',
    component: Doctor
  }, {
    path: '/patients/:id',
    name: 'patients',
    component: Patient,
    props: true
  }, {
    path: '/messages/:id',
    name: 'messages',
    component: Messages,
    props: true
  }, {
    path: '/message/new',
    name: 'message_new',
    component: MessageForm
  }
]

export default new VueRouter({ routes })
