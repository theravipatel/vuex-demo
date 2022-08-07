<template>
<h1>Login Page</h1>

<button v-on:click="login();">Change Login State</button>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        login() {
            /* 
             * Method 1
             * commit(ARG 1, ARG 2)
             * ARG 1 = STORE file's mutation function
             * ARG 2 = single string value if one var
             */
            //this.$store.commit('LOGIN', 'Ravi');
            
            /* 
             * Method 2
             * commit(ARG 1, ARG 2)
             * ARG 1 = STORE file's mutation function
             * ARG 2 = As object
             */
            //this.$store.commit('LOGIN', { user_name: 'Ravi'});

            /* 
             * Method 3
             * commit(ARG 1, ARG 2)
             * ARG 1 = As object
             */
            this.$store.commit({
                type: 'LOGIN', 
                user_name: 'Ravi'
            });
        }
    },
}
</script>