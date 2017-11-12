<template>
    
    <div class="column is-12 no-gutter is-mobile">
        <div class="box">
            <div class="is-pulled-right">{{request.type}}</div>
            <div>Dr(a). {{request.doctor.name}} ({{request.doctor.cid}})</div>
            <p>{{request.content}}</p>
            <em><strong>Registro: {{request.created_at}}</strong></em>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'request-list-item',

        props: ['request']

    }
</script>

<style scoped>
    .no-gutter { padding-bottom:2px !important; }
</style>
