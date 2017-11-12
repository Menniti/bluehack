<template>
    <div>
        <div class="is-pulled-right">
            <button class="button is-small is-primary" @click.stop="create">+ Add</button>
        </div>
        <div class="is-clear-fix"></div>
        <h2 class="subtitle is-5">&nbsp;Messages</h2>
        <message-list :list="messages"></message-list>
    </div>
</template>

<script>
    import { connect } from 'vuelm'
    import MessageStore from 'store/message'
    import MessageList from 'components/message/MessageList'

    const Messages = {
        name: 'messages',

        components: { MessageList },

        props: ['id'],

        data() {
            return {
                messages: []
            }
        },

        mounted() {
            MessageStore.fetch()
        },

        methods: {
            create() {
                this.$router.push({ name: 'message_new' })
            }
        }
    }

    export default connect(Messages, { MessageStore })
</script>
