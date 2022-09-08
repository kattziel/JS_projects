const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const timeInterval = 6

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'

    // console.log(seconds * timeInterval)
    // console.log(minutes * timeInterval + seconds / 10)
    // console.log(hours * 30 + minutes / 2)
}

// getTime()
setInterval(getTime, 100)