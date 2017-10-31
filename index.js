$(function () {
    let vm = new Vue
        ({
            el: '#program',
            data:
            {
                racing: false,
                winner: null,
                rebel: 0,
                federation: 0,
                tick: 0,
                interval: null
            },
            computed:
            {

            },
            methods:
            {
                raceStart()
                {
                    this.racing = true
                    this.interval = setInterval(() =>
                    {
                        this.victor()
                        this.raceGoing()
                    },40);
                },
                raceGoing()
                {
                    this.tick++
                    this.rebel += Math.random()
                    this.federation += Math.random()
                    console.log(this.rebel)
                },
                victor()
                {
                    if (this.rebel > 120 || this.federation > 120)
                    {
                        this.winner =  this.rebel > this.federation ? "Rebels won" : "Federation won"
                        console.log(this.winner)
                        clearInterval(this.interval)
                        this.rebel = 0
                        this.federation = 0
                    }
                    
                }
            }
        })
})