/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Oct 2023
 * This program shows a pixel moving diagnolly and the other way around if button b is pressed
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the pixels move down in a diagnolly
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter + 1
    basic.pause(500)
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the pixels move around the outside edge of the LED matrix
input.onButtonPressed(Button.B, function () {
  // setup
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)

  while (loopCounter >= 0) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter - 1
    basic.pause(500)
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})