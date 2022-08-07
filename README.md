# VueX Tutorial
- Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
- Ref. https://vueschool.io/articles/vuejs-tutorials/vuex-the-official-vuejs-store/

## 1) Install Vuex 
```
- npm install --save vuex@next
```

## 2) Initialization
-  Instantiate vuex via a createStore() function
- Create new folder 'store' in '/src' and in this folder create file 'store.js'. Name and location can be any.
- In store.js file, define state as below
```
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        user_name: 'Ravi Patel'
    }
}); 
``` 

- Now import 'store' in main.js
```
import store from './store/store';

var app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
```

## 3) State
- The store's state is defined in the state property. State is just a fancy word meaning the data you want keep in your store. You can think of it as the data property on a component but available to any of your components. 
- In any component
```
<template>
  <h1>Hello, my name is {{$store.state.user_name}}</h1>
</template>
```

## 4) Mutation
- Mutations are always synchronous and are the only thing that are allowed to change the state directly. A mutation is responsible for changing only a single piece of data.
- It's convention to uppercase mutation names, called via commit('MUTATION_NAME', payload), payload is optional
- store.js
```
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        user_name: 'There'
    },
    mutations: {
        LOGIN(state, payload) {
            state.isLoggedIn = true;
            state.user_name = payload.user_name;
        },
        LOGOUT(state) {
            state.isLoggedIn = false;
            state.user_name = 'There';
        }
    }
});
```