const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            title: 'La mia prima app in Vue',
            text: '',
            isRed: true,
            count:0
        }
    },
    methods: {
        changeClass() {
            this.isRed = !this.isRed
        },
        addCount() {
            this.count++
        },
        SubtrackCount() {
            this.count--
        }
    }
});

//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaApp.mount('#app');