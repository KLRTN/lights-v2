def on_button_pressed_a():
    global hour
    if hour < 23:
        hour += 1
    else:
        hour = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global minute
    if minute < 59:
        minute += 1
    else:
        minute = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

strip: neopixel.Strip = None
hour = 0
minute = 0
time = ""
adjust = 0
time = timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR)
minute = 0
hour = 0
timeanddate.set_time(11, 30, 0, timeanddate.MornNight.AM)

def on_forever():
    global strip
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB_RGB)
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
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
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
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
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
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
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
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
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
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
basic.forever(on_forever8)

def on_forever9():
    if time >= "16:00":
        strip.show_rainbow(1, 360)
    if time == "14:31":
        strip.show_rainbow(1, 360)
    if time == "14:32":
        strip.show_rainbow(1, 360)
    if time == "14:33":
        strip.show_rainbow(1, 360)
    if time == "14:34":
        strip.show_rainbow(1, 360)
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
basic.forever(on_forever9)
