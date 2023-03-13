// import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const count = defineStore('count', {
    state: () => (
        {number: 0}
    ),

    getters: {
        reset: (state) => (state.number = 0)
    },

    actions: {
        increment() {
            (this.number ++)
        }
    }

})
