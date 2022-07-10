input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        # # # # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . . # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        # # # # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
led.plotBarGraph(
1000,
1000
)
