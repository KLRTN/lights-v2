time = ""
hour = 0
minute = 0

def on_numeric_time(hour2, minute2, second, month, day, year):
    timeanddate.set24_hour_time(16, 0, 0)
timeanddate.numeric_time(on_numeric_time)

strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB_RGB)

def on_forever():
    basic.show_string(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR))
basic.forever(on_forever)

def on_forever2():
    global minute, hour
    basic.pause(60000)
    if minute < 59:
        minute += 1
    else:
        minute = 0
        if hour < 23:
            hour += 1
        else:
            hour = 0
basic.forever(on_forever2)

def on_forever3():
    if time == "8:55":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "8:56":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "8:57":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "8:58":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "8:59":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever3)

def on_forever4():
    if time == "10:25":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "10:26":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "10:27":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "10:28":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "10:29":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
basic.forever(on_forever4)

def on_forever5():
    if time == "11:55":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "11:56":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "11:57":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "11:58":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "11:59":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever5)

def on_forever6():
    if time == "12:30":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "12:31":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "12:32":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "12:33":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "12:34":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever6)

def on_forever7():
    if time == "13:00":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "13:01":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "13:02":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "13:03":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "13:04":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever7)

def on_forever8():
    if time == "14:30":
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    if time == "14:31":
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if time == "14:32":
        strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    if time == "14:33":
        strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
    if time == "14:34":
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever8)

def on_forever9():
    if time == "16:00":
        strip.show_rainbow(1, 360)
    if time == "16:01":
        strip.show_rainbow(1, 360)
    if time == "16:02":
        strip.show_rainbow(1, 360)
    if time == "16:03":
        strip.show_rainbow(1, 360)
    if time == "16:04":
        strip.show_rainbow(1, 360)
basic.forever(on_forever9)
