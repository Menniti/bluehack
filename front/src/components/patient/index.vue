<template>
    <div>
        <p class="subtitle is-4">Your Requests</p>

        <request-list-view :list="patients"></request-list-view>

        <div v-show="id == null">
            <br/>
            <notification>
                Patient code was not found.
            </notification>
        </div>
    </div>
</template>

<script>
    import { connect } from 'vuelm'
    import PatientStore from 'store/patient'
    import Notification from 'components/bulma/notification'
    import RequestListView from 'components/patient/RequestListView'

    const PatientView = {
        name: 'patient',

        components: { Notification, RequestListView },

        props: [ 'id' ],

        mounted() {
            PatientStore.fetchRequests(this.id)
        },

        data() {
            return { 
                patients: []
            }
        }
    }

    export default connect(PatientView, { PatientStore })
</script>
