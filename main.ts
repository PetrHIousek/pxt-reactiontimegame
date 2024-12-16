let stopky = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
    `)
})

basic.pause(randint(2000, 8000))
basic.clearScreen()
music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)

