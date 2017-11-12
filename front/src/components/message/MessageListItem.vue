<template>
    <div class="column is-12 border">
        <em>D&uacute;vida postada em {{message.created_at}}</em>
        <p>{{message.content}}</p>
        <div class="is-pulled-right">
            <span class="icon has-text-info">
                <i class="fa fa-comments-o"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'message-list-item',

    props: ['message']

}
</script>

<style scoped>
    .border { border:1px solid #ADADAD;border-radius:3px; padding:5px !important; }
</style>
