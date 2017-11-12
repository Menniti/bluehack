<template>
    <div class="columns is-multiline is-gapless is-mobile">
        <message-list-item v-for="msg in list" :message="msg" :key="msg.id"></message-list-item>
    </div>
</template>

<script>
    import MessageListItem from 'components/message/MessageListItem'

    export default {
        name: 'message-list',
        components: { MessageListItem },
        props: ['list']
    }
</script>
