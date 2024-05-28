let distance = 0
maqueenPlusV2.I2CInit()
basic.forever(function () {
    distance = maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (distance < 30) {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
})
