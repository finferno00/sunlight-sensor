basic.forever(function () {
    if (input.lightLevel() > 90) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . . . # #
            . . . # #
            . . . # #
            . . # # .
            `)
    }
})
