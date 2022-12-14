timeanddate.numericTime(function (hour, minute, second, month, day, year) {
    timeanddate.set24HourTime(14, 45, 0)
})
let time = convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
let strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB_RGB)
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
})
basic.forever(function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
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
})
basic.forever(function () {
    if (time == "16:00") {
        strip.showRainbow(1, 360)
    }
    if (time == "16:01") {
        strip.showRainbow(1, 360)
    }
    if (time == "16:02") {
        strip.showRainbow(1, 360)
    }
    if (time == "16:03") {
        strip.showRainbow(1, 360)
    }
    if (time == "16:04") {
        strip.showRainbow(1, 360)
    }
})
