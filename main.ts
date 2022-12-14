input.onGesture(Gesture.Shake, function () {
    basic.showString(time)
})
let hour = 0
let minute = 0
let time = ""
time = timeanddate.time(timeanddate.TimeFormat.HHMM24hr)
timeanddate.setTime(16, 0, 0, timeanddate.MornNight.AM)
let strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB_RGB)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(60000)
    if (minute < 59) {
        minute += 1
    } else {
        minute = 0
        if (hour < 23) {
            hour += 1
        } else {
            hour = 0
        }
    }
})
basic.forever(function () {
    if (time == "8:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "8:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "8:57") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "8:58") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "8:59") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time == "10:25") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "10:26") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "10:27") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "10:28") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "10:29") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time == "11:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "11:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "11:57") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "11:58") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "11:59") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time == "12:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "12:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "12:32") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "12:33") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "12:34") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time == "13:00") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "13:01") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "13:02") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "13:03") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "13:04") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time == "14:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "14:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "14:32") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "14:33") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "14:34") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (time >= "16:00") {
        strip.showRainbow(1, 360)
    }
    if (time == "14:31") {
        strip.showRainbow(1, 360)
    }
    if (time == "14:32") {
        strip.showRainbow(1, 360)
    }
    if (time == "14:33") {
        strip.showRainbow(1, 360)
    }
    if (time == "14:34") {
        strip.showRainbow(1, 360)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
