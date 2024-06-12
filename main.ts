/**
 * setting variables and role
 */
/**
 * the button commands
 */
/**
 * ??void draw ??
 */
/**
 * PLAYER
 * 
 * TOP LEFT = 11
 * 
 * TOP RIGHT = 12
 * 
 * BOTTOM LEFT = 13
 * 
 * BOTTOM RIGHT =14
 * 
 * player 1 is the bottom attcking top
 * 
 * player 2 is the top attacking bottom
 */
// blinking lights
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == both_ready) {
        both_ready = both_ready + 1
    }
    if (STAGE == 2) {
        if (PLAYER == 1 && (button_a == 1 && receivedNumber == bottom_left_player)) {
        	
        }
    }
    if (STAGE == 2) {
        if (PLAYER == 1 && (button_a == 1 && receivedNumber == bottom_left_player)) {
        	
        }
    }
})
// when see location, do this
input.onButtonPressed(Button.A, function () {
    if (STAGE == 1) {
        if (button_a == 0) {
            button_a = 1
        } else if (button_a == 1) {
            button_a = 2
        } else if (button_a == 2) {
            button_a = 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (STAGE == 2) {
        if (PLAYER == 1) {
            if (button_a == 1) {
                radio.sendString("" + (bottom_left_player))
            } else if (button_a == 2) {
                bottom_right_player = 0
                radio.sendString("" + (bottom_right_player))
            }
            if (button_b == 1) {
                top_left_enemy = 0
                radio.sendString("" + (top_left_enemy))
            } else if (button_b == 2) {
                top_right_enemy = 0
                radio.sendString("" + (top_right_enemy))
            }
        }
        if (PLAYER == 2) {
            if (button_a == 1) {
                bottom_left_enemy = 0
                radio.sendString("" + (bottom_left_enemy))
            } else if (button_a == 2) {
                bottom_right_enemy = 0
                radio.sendString("" + (bottom_right_enemy))
            }
            if (button_b == 1) {
                top_left_player = 0
                radio.sendString("" + (top_left_player))
            } else if (button_a == 2) {
                top_right_player = 0
                radio.sendString("" + (top_right_player))
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (STAGE == 1) {
        if (button_b == 0) {
            button_b = 1
        } else if (button_b == 1) {
            button_b = 2
        } else if (button_b == 2) {
            button_b = 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (STAGE == 1) {
        if (PLAYER == 1) {
            PLAYER = 2
        }
    }
})
let top_right_player = 0
let top_left_player = 0
let bottom_right_enemy = 0
let bottom_left_enemy = 0
let top_right_enemy = 0
let top_left_enemy = 0
let bottom_right_player = 0
let bottom_left_player = 0
let both_ready = 0
let button_a = 0
let button_b = 0
let PLAYER = 0
let STAGE = 0
radio.setGroup(1)
STAGE = 1
music.setVolume(10)
PLAYER = 1
button_b = 0
button_a = 0
let player_brightness = 255
both_ready = 0
// the blinking
loops.everyInterval(500, function () {
    if (STAGE == 1) {
        led.plotBrightness(1, 0, 5)
        led.plotBrightness(3, 0, 5)
        led.plotBrightness(1, 4, 5)
        led.plotBrightness(3, 4, 5)
        if (PLAYER == 1) {
            if (button_a == 1) {
                led.plotBrightness(1, 4, 255)
                basic.pause(200)
                led.unplot(1, 4)
                basic.pause(200)
            }
            if (button_a == 2) {
                led.plotBrightness(3, 4, 255)
                basic.pause(200)
                led.unplot(3, 4)
                basic.pause(200)
            }
            if (button_b == 1) {
                led.unplot(1, 0)
                led.plotBrightness(1, 0, 40)
                basic.pause(200)
                led.unplot(1, 0)
                basic.pause(200)
            }
            if (button_b == 2) {
                led.unplot(3, 0)
                led.plotBrightness(3, 0, 40)
                basic.pause(200)
                led.unplot(3, 0)
                basic.pause(200)
            }
        }
        if (PLAYER == 2) {
            if (button_a == 1) {
                led.plotBrightness(1, 4, 40)
                basic.pause(200)
                led.unplot(1, 4)
                basic.pause(200)
            }
            if (button_a == 2) {
                led.plotBrightness(3, 4, 40)
                basic.pause(200)
                led.unplot(3, 4)
                basic.pause(200)
            }
            if (button_b == 1) {
                led.plotBrightness(1, 0, 255)
                basic.pause(200)
                led.unplot(1, 0)
                basic.pause(200)
            }
            if (button_b == 2) {
                led.plotBrightness(3, 0, 255)
                basic.pause(200)
                led.unplot(3, 0)
                basic.pause(200)
            }
        }
    }
})
