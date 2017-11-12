<template>
    <nav class="navbar navbar-fixed">
        <div class="navbar-brand topnav-left">
            <a href="/" class="navbar-item">
                <span class="icon"><i className="fa fa-home"></i></span> 
                <span>HealthBlock</span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
            </div>
            <div class="navbar-end">
                <span class="navbar-item">
                    
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'app-header'
    }
</script>

<style scoped>
    .navbar-fixed { 
        top:0; z-index:250; position:fixed; width:100%; 
        -webkit-box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
        -moz-box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
        box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
    } 
</style>
