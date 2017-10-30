$(function () {
    let vm = new Vue
        ({
            //el: '#app',
            data:
            {
                racing: false,
                winner: null,
                rebel: 20,
                federation: 0,
                tick: 0,
                interval: null
            },
            computed:
            {

            },
            rebelStyle() {
                left: `$(this.rebel)vw`
            },
            federationStyle() {
                left: '$(this.federation)vw'
            }
        })
})