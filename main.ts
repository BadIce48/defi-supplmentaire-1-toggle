function allumer () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        allumer()
    }
})
