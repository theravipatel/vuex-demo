<template>
    <HelloWorld msg="Hello Vue!!" />
    <div class="nav-main">
        <router-link to="/">Home</router-link>
        <router-link to="/about-us">About Us</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App'
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

.nav-main a {
    color: black;
    font-weight: 500;
    text-decoration: none;
    padding: 10px;
}

.nav-main a:hover {
    background-color: #333333;
    color: #ffffff;
    transition: ease-in-out .2s;
}

#teleport_footer {
    text-align: right;
}
</style>