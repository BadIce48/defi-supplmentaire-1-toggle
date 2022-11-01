def on_forever():
    if input.button_is_pressed(Button.A):
        led.toggle_all()
basic.forever(on_forever)
