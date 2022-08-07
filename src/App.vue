<template>
    <div class="nav-main">
        <div class="nav-menu-left">
            <router-link to="/">Home</router-link>
            <router-link to="/about-us">About Us</router-link>
            <router-link to="/login" v-if="$store.state.isLoggedIn==false">Login</router-link>
            <router-link to="/profile/Ravi" v-if="$store.state.isLoggedIn==true">Profile</router-link>
        </div>
        <div class="nav-menu-right">
            <p>Hello <b>{{ $store.state.user_name }}!</b></p>
            <a href="javascript:void(0);" class="btn-logout" @click="logout()" v-if="$store.state.isLoggedIn==true">Logout</a>
        </div>
        
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    methods: {
        logout() {
            this.$store.commit('LOGOUT');
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
}

hr {
    margin-top: 30px;
    margin-bottom: 30px;
}

.nav-main {
    padding: 10px;
    background-color: #cccccc;
    padding-left: 0;
}

.nav-main .nav-menu-left {
    width: 90%;
    display: inline-block;
    text-align: left;
}
.nav-main .nav-menu-right {
    width: 10%;
    display: inline-block;
    text-align: right;
}

.nav-main .nav-menu-left a {
    color: black;
    font-weight: 500;
    text-decoration: none;
    padding: 10px;
}

.nav-main .nav-menu-left a:hover {
    background-color: #333333;
    color: #ffffff;
    transition: ease-in-out .2s;
}

#teleport_footer {
    text-align: right;
}
.nav-menu-right .btn-logout {
    text-decoration: underline;
    color: #D32F2F;
    margin-left: 15px;
}
.nav-menu-right .btn-logout, .nav-menu-right p {
    display: inline-block;
}
</style>