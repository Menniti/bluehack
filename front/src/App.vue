<template>
  <div id="app">
        <app-header></app-header>
        <div class="columns app-content">
            <div class="column is-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from 'components/AppHeader'
    
    export default {
        name: 'app',

        components:  { AppHeader },

        data() {
            return {
            }
        }
    }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

[v-cloak] {display: none}

.app-content { padding: 10px !important; }

.router-link-active { color: #2c3e50; }

@media (max-width: 420px) {
    .app-content { padding: 0px !important; }
}

h1, h2 { font-weight: normal; }

ul { list-style-type: none; padding: 0; }

li { display: inline-block; margin: 0 10px; }

a { color: #3273dc; font-size: 10pt; }
</style>
