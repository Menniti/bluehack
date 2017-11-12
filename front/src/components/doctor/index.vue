<template>
    <div>
        <h2 class="subtitle is-5">&nbsp;Inbox</h2>
        <doctor-list :list="messages"></doctor-list>
    </div>

</template>

<script>
    import { connect } from 'vuelm'
    import MessageStore from 'store/message'
    import DoctorList from 'components/doctor/DoctorMessages'

    const DoctorView = {
        name: 'doctor',

        components: { DoctorList },

        data() {
            return { messages: [], pooling: null }
        },

        mounted() {
            MessageStore.fetch()
            setInterval(() => MessageStore.fetch(), 5000)
        },

        beforeUnmount() {
            clearInterval(this.pooling)
        }
    }

    export default connect(DoctorView, { MessageStore })
</script>
