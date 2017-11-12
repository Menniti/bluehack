<template>
    <div class="columns is-desktop">
        <div class="column is-one-third"> &nbsp; </div>
        <div class="column">
            
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Autentique-se
                    </p>
                </header>

                <div class="card-content">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="usuario" />
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input type="password" class="input" placeholder="senha" />
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <p class="card-footer-item">
                        <a href="#" v-on:click.stop="doAuth">ACESSAR</a>
                    </p>
                </div>
            </div>

        </div>
        <div class="column is-one-third"> &nbsp; </div>
    </div>

</template>

<script>
    export default {
        name: 'login',

        methods: {
            doAuth() {
                console.log('authentication')
                this.$router.push({ path: 'essential' })
            }
        }
    }
</script>
