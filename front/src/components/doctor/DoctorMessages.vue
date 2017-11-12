<template>
    <div class="columns is-multiline is-gapless is-mobile">
        <doctor-list-item v-for="msg in list" :message="msg" :key="msg.id"></doctor-list-item>
    </div>
</template>

<script>
    import DoctorListItem from 'components/doctor/DoctorListItem'

    export default {
        name: 'doctor-list',
        components: { DoctorListItem },
        props: ['list']
    }
</script>
