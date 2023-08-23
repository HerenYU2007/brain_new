function 内巡线 () {
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_0)) {
        右转(1)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_0)) {
        左转(1)
    } else {
        前进(1)
    }
}
function 右转 (时间: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 15)
    basic.pause(时间)
}
function 左转 (时间: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, -23)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    basic.pause(时间)
}
input.onButtonPressed(Button.A, function () {
    right = 0
    t0 = input.runningTime()
    T = 0
    T2 = 0
    neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 15)
    前进(400)
    右转(550)
    basic.showIcon(IconNames.Heart)
    while (true) {
        if (input.runningTime() - t0 >= 4700 && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1))))) {
            neZha.stopAllMotor()
            neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 45)
            basic.pause(1000)
            PlanetX_AILens.cameraImage()
            if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # . # # #
                    . # . . .
                    . . # . .
                    `)
                neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 15)
                前进(230)
                右转(1000)
                right = 1
                break;
            }
            if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # . #
                    . . . # .
                    . . # . .
                    `)
                neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 15)
                前进(230)
                左转(750)
                前进(200)
                右转(1200)
                T = 1
                break;
            }
        } else {
            外巡线(1)
        }
    }
    T2 = input.runningTime()
    while (true) {
        if (input.runningTime() - T2 >= 5100 && T == 1) {
            break;
        } else {
            外巡线(1)
        }
        if (input.runningTime() - T2 >= 3000 && right == 1 && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_0) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1))))) {
            右转(850)
            T9 = input.runningTime()
            while (true) {
                if (input.runningTime() - T9 >= 3000) {
                    break;
                } else {
                    外巡线(1)
                }
            }
            break;
        } else {
            外巡线(1)
        }
    }
    t3 = input.runningTime()
    while (true) {
        if (input.runningTime() - t3 >= 500) {
            neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 48)
            前进(1500)
            for (let index = 0; index < 4; index++) {
                前进慢(1000)
                后退(800)
            }
            t3 = 0
            break;
        } else {
            内巡线()
        }
    }
    neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 30)
    basic.pause(500)
    neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 15)
    basic.pause(500)
    双轮左转(850)
    t4 = input.runningTime()
    while (true) {
        if (input.runningTime() - t4 >= 8000) {
            break;
        } else {
            外巡线(1)
        }
    }
    t5 = input.runningTime()
    while (true) {
        if (input.runningTime() - t5 >= 5000 && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_0))))) {
            前进(150)
            左转(1000)
            break;
        } else {
            内巡线()
        }
    }
    t7 = input.runningTime()
    while (true) {
        if (input.runningTime() - t7 >= 1700) {
            basic.showIcon(IconNames.Heart)
            右转(800)
            break;
        } else {
            内巡线()
        }
    }
    t8 = input.runningTime()
    前进(250)
    basic.pause(150)
    neZha.stopAllMotor()
    for (let index = 0; index < 3; index++) {
        neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 40)
        neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 70)
    }
})
function 后退 (时间: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 58)
    neZha.setMotorSpeed(neZha.MotorList.M2, -35)
    basic.pause(时间)
}
function 时间巡线 (时间: number) {
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1)) {
        左转(1)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
        右转(1)
    } else {
        前进(1)
    }
}
function 外巡线 (时间: number) {
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1)) {
        左转(1)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
        右转(1)
    } else {
        前进(1)
    }
}
function 双轮左转 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
    basic.pause(数字)
}
function 前进 (时间: number) {
    // 右
    neZha.setMotorSpeed(neZha.MotorList.M1, -45)
    neZha.setMotorSpeed(neZha.MotorList.M2, 32)
    basic.pause(时间)
}
function 慢后退 (数字: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 19)
    neZha.setMotorSpeed(neZha.MotorList.M2, -9)
    basic.pause(数字)
}
function 前进慢 (时间: number) {
    // 右
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M2, 16)
    basic.pause(时间)
}
function 停止 (时间: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    basic.pause(时间)
}
let t8 = 0
let t7 = 0
let t5 = 0
let t4 = 0
let t3 = 0
let T9 = 0
let T2 = 0
let T = 0
let t0 = 0
let right = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
