<template>
    <div>
        <div class="is-pulled-right">
            <button class="button is-small" @click.stop="cancel">Cancel</button>
            <button class="button is-small is-primary" @click.stop="save">Save</button>
        </div>
        <div class="is-clear-fix"></div>
        <h2 class="subtitle is-5">&nbsp;New Message</h2>
        <form>
            <div class="field">
                <textarea name="content" class="textarea" v-model="content" rows="10"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
    import MessageStore from 'store/message'

export default {
    name: 'message-form',

    data() {
        return { content: '' }
    },

    methods: {
        cancel() {
            this.$router.go(-1)
        },

        save() {
            let data = {
                id: 'ejdx' + Math.random() + 'yhe',
                owner: 'Giovanna',
                patient: '5a07654487298b196c64b9d7',
                content: this.content
            }
            MessageStore.sendMessage(data)
            this.$router.go(-1)
        }
    }
}
</script>
