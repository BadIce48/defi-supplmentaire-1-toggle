let lumiere = false
input.onButtonPressed(Button.A, function () {
    lumiere = !(lumiere)
    if (lumiere) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
