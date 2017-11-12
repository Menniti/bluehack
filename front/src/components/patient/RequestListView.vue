<template>
    <div class="columns is-multiline">

        <request-list-item v-for="item in list" :request="item" :key="item._id"></request-list-item>

        <div v-if="list.length == 0" class="column is-12">
            <notification>
                You don't have any request yet.
            </notification>
        </div>

    </div>
</template>

<script>
    import RequestListItem from 'components/patient/RequestListItem'
    import Notification from 'components/bulma/notification'

    export default {
        name: 'request-list-view',

        props: ['list'],

        components: { RequestListItem, Notification }
    }
</script>
