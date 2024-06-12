# blinking lights

def on_received_number(receivedNumber):
    global both_ready
    if receivedNumber == both_ready:
        both_ready = both_ready + 1
    if STAGE == 2:
        if PLAYER == 1 and (button_a == 1 and receivedNumber == bottom_left_player):
            pass
    if STAGE == 2:
        if PLAYER == 1 and (button_a == 1 and receivedNumber == bottom_left_player):
            pass
radio.on_received_number(on_received_number)

"""

PLAYER

TOP LEFT = 11

TOP RIGHT = 12

BOTTOM LEFT = 13

BOTTOM RIGHT =14

player 1 is the bottom attcking top

player 2 is the top attacking bottom

"""
"""

??void draw ??

"""
"""

the button commands

"""
"""

setting variables and role

"""
# when see location, do this

def on_button_pressed_a():
    global button_a
    if STAGE == 1:
        if button_a == 0:
            button_a = 1
        elif button_a == 1:
            button_a = 2
        elif button_a == 2:
            button_a = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("" + str(both_ready))
    if STAGE == 2:
        if PLAYER == 1:
            if button_a == 1:
                radio.send_string("" + str(bottom_left_player))
            elif button_a == 2:
                bottom_right_player = 0
                radio.send_string("" + str(bottom_right_player))
            if button_b == 1:
                top_left_enemy = 0
                radio.send_string("" + str(top_left_enemy))
            elif button_b == 2:
                top_right_enemy = 0
                radio.send_string("" + str(top_right_enemy))
        if PLAYER == 2:
            if button_a == 1:
                bottom_left_enemy = 0
                radio.send_string("" + str(bottom_left_enemy))
            elif button_a == 2:
                bottom_right_enemy = 0
                radio.send_string("" + str(bottom_right_enemy))
            if button_b == 1:
                top_left_player = 0
                radio.send_string("" + str(top_left_player))
            elif button_a == 2:
                top_right_player = 0
                radio.send_string("" + str(top_right_player))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global button_b
    if STAGE == 1:
        if button_b == 0:
            button_b = 1
        elif button_b == 1:
            button_b = 2
        elif button_b == 2:
            button_b = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global PLAYER
    if STAGE == 1:
        if PLAYER == 1:
            PLAYER = 2
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

bottom_left_player = 0
both_ready = 0
button_a = 0
button_b = 0
PLAYER = 0
STAGE = 0
radio.set_group(1)
STAGE = 1
music.set_volume(10)
PLAYER = 1
button_b = 0
button_a = 0
player_brightness = 255
both_ready = 0
# the blinking

def on_every_interval():
    if STAGE == 1:
        led.plot_brightness(1, 0, 5)
        led.plot_brightness(3, 0, 5)
        led.plot_brightness(1, 4, 5)
        led.plot_brightness(3, 4, 5)
        if PLAYER == 1:
            if button_a == 1:
                led.plot_brightness(1, 4, 255)
                basic.pause(200)
                led.unplot(1, 4)
                basic.pause(200)
            if button_a == 2:
                led.plot_brightness(3, 4, 255)
                basic.pause(200)
                led.unplot(3, 4)
                basic.pause(200)
            if button_b == 1:
                led.unplot(1, 0)
                led.plot_brightness(1, 0, 40)
                basic.pause(200)
                led.unplot(1, 0)
                basic.pause(200)
            if button_b == 2:
                led.unplot(3, 0)
                led.plot_brightness(3, 0, 40)
                basic.pause(200)
                led.unplot(3, 0)
                basic.pause(200)
        if PLAYER == 2:
            if button_a == 1:
                led.plot_brightness(1, 4, 40)
                basic.pause(200)
                led.unplot(1, 4)
                basic.pause(200)
            if button_a == 2:
                led.plot_brightness(3, 4, 40)
                basic.pause(200)
                led.unplot(3, 4)
                basic.pause(200)
            if button_b == 1:
                led.plot_brightness(1, 0, 255)
                basic.pause(200)
                led.unplot(1, 0)
                basic.pause(200)
            if button_b == 2:
                led.plot_brightness(3, 0, 255)
                basic.pause(200)
                led.unplot(3, 0)
                basic.pause(200)
loops.every_interval(500, on_every_interval)
