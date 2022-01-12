function doMove2 () {
    pins.analogWritePin(AnalogPin.P12, Prędkość)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, Prędkość)
    pins.analogWritePin(AnalogPin.P13, 0)
}
input.onButtonPressed(Button.A, function () {
    Prędkość = 300
    doMove2()
    basic.pause(2000)
    doStop2()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    Prędkość = 500
    doMove2()
    basic.pause(2000)
    doStop2()
    basic.pause(1000)
})
function doStop2 () {
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
}
let Prędkość = 0
led.enable(false)
pins.analogSetPeriod(AnalogPin.P12, 50000)
pins.analogSetPeriod(AnalogPin.P16, 50000)
pins.analogSetPeriod(AnalogPin.P14, 50000)
pins.analogSetPeriod(AnalogPin.P13, 50000)
doStop2()
