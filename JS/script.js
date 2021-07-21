function loading() {
    var msg = document.querySelector("div#msg")
    var msgWelcome = document.querySelector("div#msgWelcome")
    var img = document.querySelector("img#picture")
    var data = new Date()
    var hour = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Now is ${hour}h${minute}`
    if (hour >= 0 && hour < 12) {
        msgWelcome.innerHTML = '<strong> Good morning! </strong>'
        img.src = 'morning.jpg'
        document.body.style.background = '#55C0EF'
    } else if (hour >= 12 && hour < 18) {
        msgWelcome.innerHTML = '<strong> Good afternoon! </strong>'
        img.src = 'afternoon.jpg'
        document.body.style.background = '#f69341'
    } else {
        msgWelcome.innerHTML = '<strong> Good night! </strong>'
        img.src = 'night.jpg'
        document.body.style.background = 'black'
    }
}
