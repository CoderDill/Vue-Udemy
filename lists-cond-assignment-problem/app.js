const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            showing: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask)
        },
        toggle() {
            this.showing = !this.showing
        }
    }
})

app.mount('#assignment')