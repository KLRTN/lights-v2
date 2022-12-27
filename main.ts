let time = ""
timeanddate.numericTime(function (hour, minute, second, month, day, year) {
    timeanddate.set24HourTime(8, 56, 0)
})
let strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    time = convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
    if (input.buttonIsPressed(Button.A)) {
        timeanddate.set24HourTime(8, 55, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (time == "08:55") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "08:56") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "08:57") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "08:58") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "08:59") {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (time == "09:00") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "10:10") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "10:11") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "10:12") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "10:13") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "10:14") {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (time == "10:15") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "11:25") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "11:26") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "11:27") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "11:28") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "11:29") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "11:30") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "12:00") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "12:01") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "12:02") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "12:03") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "12:04") {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (time == "12:05") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "12:30") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "12:31") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "12:32") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "12:33") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "12:34") {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (time == "12:35") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "13:40") {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (time == "13:41") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "13:42") {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (time == "13:43") {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (time == "13:44") {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (time == "13:45") {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (time == "16:00") {
            strip.showRainbow(1, 360)
        }
    }
    if (time == "20:00") {
        control.reset()
    }
})
basic.forever(function () {
    if (time == "08:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "08:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (time == "08:57") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "08:58") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "08:59") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "09:00") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "10:25") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "10:26") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (time == "10:27") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "10:28") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "10:29") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "10:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "11:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "11:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
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
    if (time == "12:00") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "12:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "12:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (time == "12:32") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "12:33") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "12:34") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "12:35") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "13:00") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "13:01") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (time == "13:02") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (time == "13:03") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (time == "13:04") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (time == "13:05") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "14:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (time == "14:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
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
    if (time == "14:35") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (time == "16:00") {
        strip.showRainbow(1, 360)
    }
})
