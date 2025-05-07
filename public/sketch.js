const DATA = {
  max_lives: 10,
  inf: 1000,
  std_mov_int: 5,
  chr1_mov_int: 7.5,
  chr2_mov_int: 12.5,
  chr3_mov_int: 20,
  chr4_mov_int: 20,
  spw_l: 100,
  spw_r: 1400,
  bd_l: 50,
  bd_r: 1450,
  bd_b: 398,
  bd_j_t: 250,
  bd_j_b: 0,
  cld_chr: 10,
  cld_shd: 25,
  cld_ham: 50,
  cld_pun: 5,
  shd_drt: 5,
  f_upd_int: 200,
  chr_upg_int_1: 2,
  chr_upg_int_2: 4,
  shd_sz: 65,
  dmg_ch1: 2,
  dmg_ch2: 4,
  dmg_ch3: 8,
  dmg_ch4: 8,
  dmg_pun: 2,
}

const GAME = {
  p1: {
    wins: 0,
    hit: false,
    x: 100,
    y: 0,
    direction: "left",
    lives: DATA.max_lives,
    cooldowns: {
      shield: 0,
      charge: 0,
      hammer: 0,
      punch: 0
    },
    shield: 0,
    status: "default",
    status_index: 0,
    down_held: false,
    up_held: false
  },
  p2: {
    wins: 0,
    hit: false,
    x: 1400,
    y: 0,
    direction: "right",
    lives: DATA.max_lives,
    cooldowns: {
      shield: 0,
      charge: 0,
      hammer: 0,
      punch: 0
    },
    status: "default",
    status_index: 0,
    down_held: false,
    up_held: false
  },
  frame_index: 1,
  frame_update: 0,
  key_status: []
}

const VISUALS = {
  p1: {
    default: null,
    defaultr: null,
    punch: null,
    punchr: null,
    charge_1: {},
    charge_2: {},
    charge_3: {},
    charge_4: {},
    charge_1r: {},
    charge_2r: {},
    charge_3r: {},
    charge_4r: {}
  },
  p2: {
    default: null,
    defaultr: null,
    punch: null,
    punchr: null,
    charge_1: {},
    charge_2: {},
    charge_3: {},
    charge_4: {},
    charge_1r: {},
    charge_2r: {},
    charge_3r: {},
    charge_4r: {}
  }
}

function preload() {
  VISUALS.p1.default = loadImage("VISUALS/p1.png")
  VISUALS.p1.punch = loadImage("VISUALS/p1_punch.png")
  VISUALS.p1.shield = loadImage("VISUALS/p1_shield.png")
  VISUALS.p1.charge_1[1] = loadImage("VISUALS/p1_charge1_1.png")
  VISUALS.p1.charge_1[2] = loadImage("VISUALS/p1_charge1_2.png")
  VISUALS.p1.charge_1[3] = loadImage("VISUALS/p1_charge1_3.png")
  VISUALS.p1.charge_2[1] = loadImage("VISUALS/p1_charge2_1.png")
  VISUALS.p1.charge_2[2] = loadImage("VISUALS/p1_charge2_2.png")
  VISUALS.p1.charge_2[3] = loadImage("VISUALS/p1_charge2_3.png")
  VISUALS.p1.charge_3[1] = loadImage("VISUALS/p1_charge3_1.png")
  VISUALS.p1.charge_3[2] = loadImage("VISUALS/p1_charge3_2.png")
  VISUALS.p1.charge_3[3] = loadImage("VISUALS/p1_charge3_3.png")
  VISUALS.p1.charge_4[1] = loadImage("VISUALS/p1_charge4_1.png")
  VISUALS.p1.charge_4[2] = loadImage("VISUALS/p1_charge4_2.png")
  VISUALS.p1.charge_4[3] = loadImage("VISUALS/p1_charge4_3.png")

  VISUALS.p2.default = loadImage("VISUALS/p2.png")
  VISUALS.p2.punch = loadImage("VISUALS/p2_punch.png")
  VISUALS.p2.shield = loadImage("VISUALS/p2_shield.png")
  VISUALS.p2.charge_1[1] = loadImage("VISUALS/p2_charge1_1.png")
  VISUALS.p2.charge_1[2] = loadImage("VISUALS/p2_charge1_2.png")
  VISUALS.p2.charge_1[3] = loadImage("VISUALS/p2_charge1_3.png")
  VISUALS.p2.charge_2[1] = loadImage("VISUALS/p2_charge2_1.png")
  VISUALS.p2.charge_2[2] = loadImage("VISUALS/p2_charge2_2.png")
  VISUALS.p2.charge_2[3] = loadImage("VISUALS/p2_charge2_3.png")
  VISUALS.p2.charge_3[1] = loadImage("VISUALS/p2_charge3_1.png")
  VISUALS.p2.charge_3[2] = loadImage("VISUALS/p2_charge3_2.png")
  VISUALS.p2.charge_3[3] = loadImage("VISUALS/p2_charge3_3.png")
  VISUALS.p2.charge_4[1] = loadImage("VISUALS/p2_charge4_1.png")
  VISUALS.p2.charge_4[2] = loadImage("VISUALS/p2_charge4_2.png")
  VISUALS.p2.charge_4[3] = loadImage("VISUALS/p2_charge4_3.png")

  VISUALS.p1.defaultr = loadImage("VISUALS/p1r.png")
  VISUALS.p1.punchr = loadImage("VISUALS/p1_punchr.png")
  VISUALS.p1.shieldr = loadImage("VISUALS/p1_shieldr.png")
  VISUALS.p1.charge_1r[1] = loadImage("VISUALS/p1_charge1_1r.png")
  VISUALS.p1.charge_1r[2] = loadImage("VISUALS/p1_charge1_2r.png")
  VISUALS.p1.charge_1r[3] = loadImage("VISUALS/p1_charge1_3r.png")
  VISUALS.p1.charge_2r[1] = loadImage("VISUALS/p1_charge2_1r.png")
  VISUALS.p1.charge_2r[2] = loadImage("VISUALS/p1_charge2_2r.png")
  VISUALS.p1.charge_2r[3] = loadImage("VISUALS/p1_charge2_3r.png")
  VISUALS.p1.charge_3r[1] = loadImage("VISUALS/p1_charge3_1r.png")
  VISUALS.p1.charge_3r[2] = loadImage("VISUALS/p1_charge3_2r.png")
  VISUALS.p1.charge_3r[3] = loadImage("VISUALS/p1_charge3_3r.png")
  VISUALS.p1.charge_4r[1] = loadImage("VISUALS/p1_charge4_1r.png")
  VISUALS.p1.charge_4r[2] = loadImage("VISUALS/p1_charge4_2r.png")
  VISUALS.p1.charge_4r[3] = loadImage("VISUALS/p1_charge4_3r.png")

  VISUALS.p2.defaultr = loadImage("VISUALS/p2r.png")
  VISUALS.p2.punchr = loadImage("VISUALS/p2_punchr.png")
  VISUALS.p2.shieldr = loadImage("VISUALS/p2_shieldr.png")
  VISUALS.p2.charge_1r[1] = loadImage("VISUALS/p2_charge1_1r.png")
  VISUALS.p2.charge_1r[2] = loadImage("VISUALS/p2_charge1_2r.png")
  VISUALS.p2.charge_1r[3] = loadImage("VISUALS/p2_charge1_3r.png")
  VISUALS.p2.charge_2r[1] = loadImage("VISUALS/p2_charge2_1r.png")
  VISUALS.p2.charge_2r[2] = loadImage("VISUALS/p2_charge2_2r.png")
  VISUALS.p2.charge_2r[3] = loadImage("VISUALS/p2_charge2_3r.png")
  VISUALS.p2.charge_3r[1] = loadImage("VISUALS/p2_charge3_1r.png")
  VISUALS.p2.charge_3r[2] = loadImage("VISUALS/p2_charge3_2r.png")
  VISUALS.p2.charge_3r[3] = loadImage("VISUALS/p2_charge3_3r.png")
  VISUALS.p2.charge_4r[1] = loadImage("VISUALS/p2_charge4_1r.png")
  VISUALS.p2.charge_4r[2] = loadImage("VISUALS/p2_charge4_2r.png")
  VISUALS.p2.charge_4r[3] = loadImage("VISUALS/p2_charge4_3r.png")
}

function setup() {
  createCanvas(1500, 675)

  strokeWeight(3)
  textFont("Courier New")

  frameRate(50)
}

function render(player, path, x, y) {
  GAME[player].direction === "left" ? path += "r" : path
  // console.log(path)
  if (Object.keys(VISUALS[player][path]).length === 3) {
    image(VISUALS[player][path][GAME.frame_index], x - 50, DATA.bd_b - y)
  } else {
    image(VISUALS[player][path], x - 50, DATA.bd_b - y)
  }
}

function keyStatusUpdate(key) {
  if (keyIsDown(key) && !GAME.key_status.includes(key)) {
    GAME.key_status.push(key)
  } else if (!keyIsDown(key) && GAME.key_status.includes(key)) {
    GAME.key_status.splice(GAME.key_status.indexOf(key), 1)
  }
}

function draw() {
  { // basic visuals

    // background
    stroke("#FFFFFF")
    background("#000000")
    line(0, 500, 1500, 500)
    line(350, 500, 350, 675)
    line(1150, 500, 1150, 675)

    // player text
    textSize(100)
    textAlign(LEFT)
    stroke("#FF0000")
    fill("#FF0000")
    text("P1", 0, 675)
    textAlign(RIGHT)
    stroke("#00FFFF")
    fill("#00FFFF")
    text("P2", 1500, 675)

    stroke("#FFFFFF")
    fill("#FFFFFF")

    // win display
    noFill()

    GAME.p1.wins > 0 ? fill("#FFFF00") : noFill()
    circle(15, 595, 20)
    GAME.p1.wins > 1 ? fill("#FFFF00") : noFill()
    circle(15, 565, 20)
    GAME.p1.wins > 2 ? fill("#FFFF00") : noFill()
    circle(45, 595, 20)
    GAME.p1.wins > 3 ? fill("#FFFF00") : noFill()
    circle(45, 565, 20)
    GAME.p1.wins > 4 ? fill("#FFFF00") : noFill()
    circle(75, 595, 20)
    GAME.p1.wins > 5 ? fill("#FFFF00") : noFill()
    circle(75, 565, 20)
    GAME.p1.wins > 6 ? fill("#FFFF00") : noFill()
    circle(105, 595, 20)
    GAME.p1.wins > 7 ? fill("#FFFF00") : noFill()
    circle(105, 565, 20)
    GAME.p1.wins > 8 ? fill("#FFFF00") : noFill()
    circle(135, 595, 20)
    GAME.p1.wins > 9 ? fill("#FFFF00") : noFill()
    circle(135, 565, 20)

    GAME.p2.wins > 0 ? fill("#FFFF00") : noFill()
    circle(1485, 595, 20)
    GAME.p2.wins > 1 ? fill("#FFFF00") : noFill()
    circle(1485, 565, 20)
    GAME.p2.wins > 2 ? fill("#FFFF00") : noFill()
    circle(1455, 595, 20)
    GAME.p2.wins > 3 ? fill("#FFFF00") : noFill()
    circle(1455, 565, 20)
    GAME.p2.wins > 4 ? fill("#FFFF00") : noFill()
    circle(1425, 595, 20)
    GAME.p2.wins > 5 ? fill("#FFFF00") : noFill()
    circle(1425, 565, 20)
    GAME.p2.wins > 6 ? fill("#FFFF00") : noFill()
    circle(1395, 595, 20)
    GAME.p2.wins > 7 ? fill("#FFFF00") : noFill()
    circle(1395, 565, 20)
    GAME.p2.wins > 8 ? fill("#FFFF00") : noFill()
    circle(1365, 595, 20)
    GAME.p2.wins > 9 ? fill("#FFFF00") : noFill()
    circle(1365, 565, 20)

    fill("#FFFFFF")

    // game text
    textSize(75)
    textAlign(CENTER)
    text("Masters of the", 750, 575)
    text("--> GROUND <--", 750, 650)

    // live outline
    rect(5, 525, 110, 20)
    rect(1385, 525, 110, 20)

    noStroke()

    // P1 lives
    if (GAME.p1.lives > DATA.max_lives * 0.6) {
      fill("#00FF00")
    } else if (GAME.p1.lives > DATA.max_lives * 0.2) {
      fill("#FF8F00")
    } else {
      fill("#FF0000")
    }
    rect(5, 525, (110 / DATA.max_lives) * GAME.p1.lives, 20)

    // P2 lives
    if (GAME.p2.lives > DATA.max_lives * 0.6) {
      fill("#00FF00")
    } else if (GAME.p2.lives > DATA.max_lives * 0.2) {
      fill("#FF8F00")
    } else {
      fill("#FF0000")
    }
    rect(1385, 525, (110 / DATA.max_lives) * GAME.p2.lives, 20)

    // live display
    fill("#FFFFFF")
    textSize(25)
    textAlign(LEFT)
    text(GAME.p1.lives, 120, 543)
    textAlign(RIGHT)
    text(GAME.p2.lives, 1380, 543)

    // punch cooldown
    fill("#00FF0088")
    rect(175, 510, (150 / DATA.cld_pun) * (DATA.cld_pun - GAME.p1.cooldowns.punch), 35)
    rect(1175, 510, (150 / DATA.cld_pun) * (DATA.cld_pun - GAME.p2.cooldowns.punch), 35)

    // shield cooldown
    fill("#008FFF88")
    rect(175, 550, (150 / DATA.cld_shd) * (DATA.cld_shd - GAME.p1.cooldowns.shield), 35)
    rect(1175, 550, (150 / DATA.cld_shd) * (DATA.cld_shd - GAME.p2.cooldowns.shield), 35)

    // charge cooldown
    fill("#FFFF0088")
    rect(175, 590, (150 / DATA.cld_chr) * (DATA.cld_chr - GAME.p1.cooldowns.charge), 35)
    rect(1175, 590, (150 / DATA.cld_chr) * (DATA.cld_chr - GAME.p2.cooldowns.charge), 35)

    // hammer cooldown
    fill("#FF000088")
    rect(175, 630, (150 / DATA.cld_ham) * (DATA.cld_ham - GAME.p1.cooldowns.hammer), 35)
    rect(1175, 630, (150 / DATA.cld_ham) * (DATA.cld_ham - GAME.p2.cooldowns.hammer), 35)

    textSize(40)
    textAlign(CENTER)
    fill("#FFFFFF")

    // cooldown texts
    text("PUNCH", 250, 540)
    text("SHIELD", 250, 580)
    text("CHARGE", 250, 620)
    text("HAMMER", 250, 660)

    text("PUNCH", 1250, 540)
    text("SHIELD", 1250, 580)
    text("CHARGE", 1250, 620)
    text("HAMMER", 1250, 660)
  } { // status & frame update
    if (millis() > GAME.frame_update + DATA.f_upd_int) {

      // animation frame update
      GAME.frame_update = millis()
      GAME.frame_index === 3 ? GAME.frame_index = 1 : GAME.frame_index++

      // cooldown subtraction
      for (let i of Object.keys(GAME.p1.cooldowns)) {
        GAME.p1.cooldowns[i] == 0 ? "" : GAME.p1.cooldowns[i]--
        GAME.p2.cooldowns[i] == 0 ? "" : GAME.p2.cooldowns[i]--
      }

      // status index
      if (!(GAME.p1.status === "charge_4" || GAME.p1.status === "default")) {
        GAME.p1.status_index--
      } if (!(GAME.p2.status === "charge_4" || GAME.p2.status === "default")) {
        GAME.p2.status_index--
      }

      // hit bool reset
      if (GAME.p1.status === "default") {
        GAME.p1.hit = false
      } if (GAME.p2.status === "default") {
        GAME.p2.hit = false
      }

      // charge upgrade
      if (GAME.p1.status == "charge_1" && GAME.p1.status_index <= 0) {
        GAME.p1.status = "charge_2"
        GAME.p1.status_index = DATA.chr_upg_int_2
      } else if (GAME.p1.status == "charge_2" && GAME.p1.status_index <= 0) {
        GAME.p1.status = "charge_3"
        GAME.p1.status_index = DATA.inf
      } if (GAME.p2.status == "charge_1" && GAME.p2.status_index <= 0) {
        GAME.p2.status = "charge_2"
        GAME.p2.status_index = DATA.chr_upg_int_2
      } else if (GAME.p2.status == "charge_2" && GAME.p2.status_index <= 0) {
        GAME.p2.status = "charge_3"
        GAME.p2.status_index = DATA.inf
      }

      // hammer y-level
      if (GAME.p1.status == "charge_4" && GAME.p1.status_index == 0) {
        if (GAME.p1.y >= DATA.bd_j_t) {
          GAME.p1.status_index = 1
        }
      } else if (GAME.p1.status == "charge_4" && GAME.p1.status_index == 1) {
        if (GAME.p1.y <= DATA.bd_j_b) {
          GAME.p1.status_index = 0
          GAME.p1.status = "default"
          GAME.p1.cooldowns.hammer = DATA.cld_ham
        }
      } if (GAME.p2.status == "charge_4" && GAME.p2.status_index == 0) {
        if (GAME.p2.y >= DATA.bd_j_t) {
          GAME.p2.status_index = 1
        }
      } else if (GAME.p2.status == "charge_4" && GAME.p2.status_index == 1) {
        if (GAME.p2.y <= DATA.bd_j_b) {
          GAME.p2.status_index = 0
          GAME.p2.status = "default"
          GAME.p2.cooldowns.hammer = DATA.cld_ham
        }
      }

      // punch
      if (GAME.p1.status === "punch") { GAME.p1.cooldowns.punch = DATA.cld_pun }
      if (GAME.p2.status === "punch") { GAME.p2.cooldowns.punch = DATA.cld_pun }
      if (GAME.p1.status === "punch" && GAME.p1.status_index <= 0) {
        GAME.p1.cooldowns.punch = DATA.cld_pun
        GAME.p1.status = "default"
      } if (GAME.p2.status === "punch" && GAME.p2.status_index <= 0) {
        GAME.p2.cooldowns.punch = DATA.cld_pun
        GAME.p2.status = "default"
      }

      // y level consistency
      if (GAME.p1.status !== "charge_4" && GAME.p1.y != 0) {
        GAME.p1.y = 0
      } if (GAME.p2.status !== "charge_4" && GAME.p2.y != 0) {
        GAME.p2.y = 0
      }
    }
  } { // render players
    for (let i of ["p1", "p2"]) {
      render(i, GAME[i].status, GAME[i].x, GAME[i].y)
      if (GAME[i].status === "shield") {
        if (GAME[i].status_index <= 0) {
          GAME[i].status = "default"
          GAME[i].cooldowns.shield = DATA.cld_shd
        } else {
          GAME[i].cooldowns.shield = DATA.cld_shd
          fill("#00FF0066")
          circle(GAME[i].x - 2, 450 - GAME[i].y, DATA.shd_sz)
          fill("#FFFFFF")
        }
      }
    }
  } { // read keys

    // get key status
    keyStatusUpdate(68)
    keyStatusUpdate(65)
    keyStatusUpdate(87)
    keyStatusUpdate(83)
    keyStatusUpdate(37)
    keyStatusUpdate(38)
    keyStatusUpdate(39)
    keyStatusUpdate(40)

    // simple movements + shield
    if (GAME.p1.status === "default") {
      if (GAME.key_status.includes(68)) {
        GAME.p1.x += DATA.std_mov_int
        GAME.p1.direction = "right"
      } if (GAME.key_status.includes(65)) {
        GAME.p1.x -= DATA.std_mov_int
        GAME.p1.direction = "left"
      }
    } if (GAME.p2.status === "default") {
      if (GAME.key_status.includes(37)) {
        GAME.p2.x -= DATA.std_mov_int
        GAME.p2.direction = "left"
      } if (GAME.key_status.includes(39)) {
        GAME.p2.x += DATA.std_mov_int
        GAME.p2.direction = "right"
      }
    }

    // shield (+ down release)
    if (GAME.key_status.includes(83) && GAME.p1.status == "default") {
      GAME.p1.down_held = true
    } if (GAME.key_status.includes(40) && GAME.p2.status == "default") {
      GAME.p2.down_held = true
    } if (GAME.p1.down_held && !GAME.key_status.includes(83) && GAME.p1.cooldowns.shield == 0 && GAME.p1.status == "default") {
      GAME.p1.status = "shield"
      GAME.p1.status_index = DATA.shd_drt
    } if (GAME.p2.down_held && !GAME.key_status.includes(40) && GAME.p2.cooldowns.shield == 0 && GAME.p2.status == "default") {
      GAME.p2.status = "shield"
      GAME.p2.status_index = DATA.shd_drt
    } if (!GAME.key_status.includes(83)) {
      GAME.p1.down_held = false
    } if (!GAME.key_status.includes(40)) {
      GAME.p2.down_held = false
    }

    // charge
    if (GAME.p1.status != "charge_4") {
      if (GAME.key_status.includes(83) && GAME.p1.cooldowns.charge === 0) {
        if (GAME.key_status.includes(68)) {
          GAME.p1.status = "charge_1"
          GAME.p1.status_index = DATA.chr_upg_int_1
          GAME.p1.direction = "right"
        } if (GAME.key_status.includes(65)) {
          GAME.p1.status = "charge_1"
          GAME.p1.status_index = DATA.chr_upg_int_1
          GAME.p1.direction = "left"
        }
      }
    }
    if (GAME.p2.status != "charge_4") {
      if (GAME.key_status.includes(40) && GAME.p2.cooldowns.charge === 0) {
        if (GAME.key_status.includes(39)) {
          GAME.p2.status = "charge_1"
          GAME.p2.status_index = DATA.chr_upg_int_1
          GAME.p2.direction = "right"
        } if (GAME.key_status.includes(37)) {
          GAME.p2.status = "charge_1"
          GAME.p2.status_index = DATA.chr_upg_int_1
          GAME.p2.direction = "left"
        }
      }
    }

    // hammer (+ up release)
    if (GAME.key_status.includes(87) && GAME.p1.status != "shield" && GAME.p1.status != "punch") {
      GAME.p1.up_held = true
    } if (GAME.key_status.includes(38) && GAME.p2.status != "shield" && GAME.p1.status != "punch") {
      GAME.p2.up_held = true
    } if (GAME.p1.up_held && GAME.p1.cooldowns.hammer == 0 && GAME.key_status.includes(83) && GAME.p1.status != "shield" && GAME.p1.status != "punch") {
      GAME.p1.status = "charge_4"
      GAME.p1.status_index = 0
    } if (GAME.p2.up_held && GAME.p2.cooldowns.hammer == 0 && GAME.key_status.includes(40) && GAME.p2.status != "shield" && GAME.p1.status != "punch") {
      GAME.p2.status = "charge_4"
      GAME.p2.status_index = 0
    } if (!GAME.key_status.includes(87)) {
      GAME.p1.up_held = false
    } if (!GAME.key_status.includes(38)) {
      GAME.p2.up_held = false
    }

    // charge + hammer (or cancel)
    if (GAME.p1.status.includes("charge") && GAME.key_status.includes(87) && GAME.p1.status != "charge_4") {
      GAME.p1.hit = false
      if (GAME.p1.cooldowns.hammer === 0) {
        GAME.p1.status = "charge_4"
        GAME.p1.status_index = 0
      } else {
        GAME.p1.status = "default"
        GAME.p1.cooldowns.shield = Math.max(1, GAME.p1.cooldowns.shield)
      }
    } if (GAME.p2.status.includes("charge") && GAME.key_status.includes(38) && GAME.p2.status != "charge_4") {
      GAME.p2.hit = false
      if (GAME.p2.cooldowns.hammer === 0) {
        GAME.p2.status = "charge_4"
        GAME.p2.status_index = 0
      } else {
        GAME.p2.status = "default"
        GAME.p2.cooldowns.shield = Math.max(1, GAME.p2.cooldowns.shield)
      }
    }

    // punch
    if (GAME.p1.up_held && GAME.key_status.includes(68) && GAME.p1.cooldowns.punch <= 0 && GAME.p1.status != "charge_4") {
      GAME.p1.status = "punch"
      GAME.p1.status_index = 1
      GAME.p1.direction = "right"
    } if (GAME.p2.up_held && GAME.key_status.includes(39) && GAME.p2.cooldowns.punch <= 0 && GAME.p2.status != "charge_4") {
      GAME.p2.status = "punch"
      GAME.p2.status_index = 1
      GAME.p2.direction = "right"
    } if (GAME.p1.up_held && GAME.key_status.includes(65) && GAME.p1.cooldowns.punch <= 0 && GAME.p1.status != "charge_4") {
      GAME.p1.status = "punch"
      GAME.p1.status_index = 1
      GAME.p1.direction = "left"
    } if (GAME.p2.up_held && GAME.key_status.includes(37) && GAME.p2.cooldowns.punch <= 0 && GAME.p2.status != "charge_4") {
      GAME.p2.status = "punch"
      GAME.p2.status_index = 1
      GAME.p2.direction = "left"
    }
  } { // movements

    // charge
    if (GAME.p1.status === "charge_1") {
      GAME.p1.cooldowns.charge = DATA.cld_chr
      GAME.p1.direction === "right" ? GAME.p1.x += DATA.chr1_mov_int : GAME.p1.x -= DATA.chr1_mov_int
    } else if (GAME.p1.status === "charge_2") {
      GAME.p1.cooldowns.charge = DATA.cld_chr
      GAME.p1.direction === "right" ? GAME.p1.x += DATA.chr2_mov_int : GAME.p1.x -= DATA.chr2_mov_int
    } else if (GAME.p1.status === "charge_3") {
      GAME.p1.cooldowns.charge = DATA.cld_chr
      GAME.p1.direction === "right" ? GAME.p1.x += DATA.chr3_mov_int : GAME.p1.x -= DATA.chr3_mov_int
    } if (GAME.p2.status === "charge_1") {
      GAME.p2.cooldowns.charge = DATA.cld_chr
      GAME.p2.direction === "right" ? GAME.p2.x += DATA.chr1_mov_int : GAME.p2.x -= DATA.chr1_mov_int
    } else if (GAME.p2.status === "charge_2") {
      GAME.p2.cooldowns.charge = DATA.cld_chr
      GAME.p2.direction === "right" ? GAME.p2.x += DATA.chr2_mov_int : GAME.p2.x -= DATA.chr2_mov_int
    } else if (GAME.p2.status === "charge_3") {
      GAME.p2.cooldowns.charge = DATA.cld_chr
      GAME.p2.direction === "right" ? GAME.p2.x += DATA.chr3_mov_int : GAME.p2.x -= DATA.chr3_mov_int
    }

    // hammer
    if (GAME.p1.status === "charge_4" && GAME.p1.status_index === 0) {
      GAME.p1.cooldowns.hammer = DATA.cld_ham
      GAME.p1.y < DATA.bd_j_t - 20 ? GAME.p1.y += DATA.chr4_mov_int : GAME.p1.y = DATA.bd_j_t
    } else if (GAME.p1.status === "charge_4" && GAME.p1.status_index === 1) {
      GAME.p1.cooldowns.hammer = DATA.cld_ham
      GAME.p1.y > DATA.bd_j_b + 20 ? GAME.p1.y -= DATA.chr4_mov_int : GAME.p1.y = DATA.bd_j_b
    } if (GAME.p2.status === "charge_4" && GAME.p2.status_index === 0) {
      GAME.p2.cooldowns.hammer = DATA.cld_ham
      GAME.p2.y < DATA.bd_j_t - 20 ? GAME.p2.y += DATA.chr4_mov_int : GAME.p2.y = DATA.bd_j_t
    } else if (GAME.p2.status === "charge_4" && GAME.p2.status_index === 1) {
      GAME.p2.cooldowns.hammer = DATA.cld_ham
      GAME.p2.y > DATA.bd_j_b + 20 ? GAME.p2.y -= DATA.chr4_mov_int : GAME.p2.y = DATA.bd_j_b
    }
  } { // detect hits
    if (GAME.p1.y < 75 && GAME.p2.y < 75) { // ground check

      for (let i of ["p1", "p2"]) {
        let j; i === "p1" ? j = "p2" : j = "p1"
        if (!GAME[i].hit) {
          if (GAME[i].status === "punch") {
            if (GAME[i].direction == "left" && GAME[j].x + 10 < GAME[i].x && GAME[j].x + 90 > GAME[i].x
              || GAME[i].direction == "right" && GAME[j].x - 10 > GAME[i].x && GAME[j].x - 90 < GAME[i].x) {
              GAME[i].hit = true
              if (GAME[j].status === "shield") {
                GAME[j].lives -= DATA.dmg_pun / 2
                GAME[j].status = "default"
                GAME[j].cooldowns.shield = DATA.cld_shd
              } else if (GAME[j].status.includes("charge")) {
                GAME[j].lives -= DATA.dmg_pun
                GAME[j].status = "default"
                GAME[j].cooldowns.charge = DATA.cld_chr
              } else {
                GAME[j].lives -= DATA.dmg_pun
              }
            }
          } else if (GAME[i].status.includes("charge")) {
            if ((GAME[i].direction == "left" && GAME[j].x + 10 < GAME[i].x && GAME[j].x + 90 > GAME[i].x
              || GAME[i].direction == "right" && GAME[j].x - 10 > GAME[i].x && GAME[j].x - 90 < GAME[i].x)
              || (GAME[i].status === "charge_4") && (GAME[j].x + 90 > GAME[i].x && GAME[j].x - 90 < GAME[i].x)) {
              if (GAME[j].status.includes("charge")) {
                if (GAME[i].status.split("_")[1] > GAME[j].status.split("_")[1]) {
                  if (GAME[i].status !== "charge_4" || GAME[i].status === "charge_4" && GAME[i].status_index === 1) {
                    GAME[i].hit = true
                    GAME[j].status = "default"
                    GAME[j].lives -= DATA["dmg_ch" + GAME[i].status.split("_")[1]]
                    GAME[j].cooldowns.charge = DATA.cld_chr
                  }
                } else if (GAME[i].status.split("_")[1] < GAME[j].status.split("_")[1]) {
                  if (GAME[j].status !== "charge_4" || GAME[j].status === "charge_4" && GAME[j].status_index === 1) {
                    GAME[j].hit = true
                    GAME[i].status = "default"
                    GAME[i].lives -= DATA["dmg_ch" + GAME[j].status.split("_")[1]]
                    GAME[i].cooldowns.charge = DATA.cld_chr
                  }
                } else {
                  if (GAME[i].status_index < GAME[j].status_index) {
                    if (GAME[i].status !== "charge_4" || GAME[i].status === "charge_4" && GAME[i].status_index === 1) {
                      GAME[i].hit = true
                      GAME[j].status = "default"
                      GAME[j].lives -= DATA["dmg_ch" + GAME[i].status.split("_")[1]]
                      GAME[j].cooldowns.charge = DATA.cld_chr
                    }
                  } else if (GAME[i].status_index > GAME[j].status_index) {
                    if (GAME[j].status !== "charge_4" || GAME[j].status === "charge_4" && GAME[j].status_index === 1) {
                      GAME[j].hit = true
                      GAME[i].status = "default"
                      GAME[i].lives -= DATA["dmg_ch" + GAME[j].status.split("_")[1]]
                      GAME[i].cooldowns.charge = DATA.cld_chr
                    }
                  } else {
                    GAME[i].status = "default"
                    GAME[j].status = "default"
                    GAME[i].cooldowns.charge = DATA.cld_chr
                    GAME[j].cooldowns.charge = DATA.cld_chr
                  }
                }
              } else if (GAME[j].status === "shield") {
                if (GAME[i].status === "charge_1" || GAME[i].status === "charge_2") {
                  GAME[i].status = "default"
                  GAME[i].cooldowns.charge = DATA.cld_chr
                } else if (GAME[i].status === "charge_3") {
                  GAME[i].hit = true
                  GAME[j].status = "default"
                  GAME[j].cooldowns.shield = DATA.cld_shd
                  GAME[j].lives -= DATA.dmg_ch3 / 2
                } else if (GAME[i].status === "charge_4" && GAME[i].status_index === 1) {
                  GAME[i].hit = true
                  GAME[j].status = "default"
                  GAME[j].cooldowns.shield = DATA.cld_shd
                  GAME[j].lives -= DATA.dmg_ch4 / 2
                }
              } else if (GAME[j].status === "default") {
                if (GAME[i].status !== "charge_4" || GAME[i].status === "charge_4" && GAME[i].status_index === 1) {
                  GAME[i].hit = true
                  GAME[j].lives -= DATA["dmg_ch" + GAME[i].status.split("_")[1]]
                }
              }
            }
          }
        }
      }
    }
  } { // block map exit
    if (GAME.p1.x < DATA.bd_l) {
      if (GAME.p1.status.includes("charge")) { GAME.p1.cooldowns.charge = DATA.cld_chr }
      GAME.p1.x = DATA.bd_l
      GAME.p1.status = "default"
      GAME.p1.status_index = 0
    } if (GAME.p2.x < DATA.bd_l) {
      if (GAME.p2.status.includes("charge")) { GAME.p2.cooldowns.charge = DATA.cld_chr }
      GAME.p2.x = DATA.bd_l
      GAME.p2.status = "default"
      GAME.p2.status_index = 0
    } if (GAME.p1.x > DATA.bd_r) {
      if (GAME.p1.status.includes("charge")) { GAME.p1.cooldowns.charge = DATA.cld_chr }
      GAME.p1.x = DATA.bd_r
      GAME.p1.status = "default"
      GAME.p1.status_index = 0
    } if (GAME.p2.x > DATA.bd_r) {
      if (GAME.p2.status.includes("charge")) { GAME.p2.cooldowns.charge = DATA.cld_chr }
      GAME.p2.x = DATA.bd_r
      GAME.p2.status = "default"
      GAME.p2.status_index = 0
    }
  } { // death detection
    if (GAME.p1.lives <= 0) {
      GAME.p2.wins++
      GAME.p1.status = "default"
      GAME.p2.status = "default"
      GAME.p1.x = DATA.spw_l
      GAME.p2.x = DATA.spw_r
      GAME.p1.y = DATA.bd_j_b
      GAME.p2.y = DATA.bd_j_b
      GAME.p1.lives = DATA.max_lives
      GAME.p2.lives = DATA.max_lives
      for (let i of Object.keys(GAME.p1.cooldowns)) {
        GAME.p1.cooldowns[i] = 0
        GAME.p2.cooldowns[i] = 0
      }
    } else if (GAME.p2.lives <= 0) {
      GAME.p1.wins++
      GAME.p1.status = "default"
      GAME.p2.status = "default"
      GAME.p1.x = DATA.spw_l
      GAME.p2.x = DATA.spw_r
      GAME.p1.y = DATA.bd_j_b
      GAME.p2.y = DATA.bd_j_b
      GAME.p1.lives = DATA.max_lives
      GAME.p2.lives = DATA.max_lives
      for (let i of Object.keys(GAME.p1.cooldowns)) {
        GAME.p1.cooldowns[i] = 0
        GAME.p2.cooldowns[i] = 0
      }
    }
    if (GAME.p1.wins == 10 || GAME.p2.wins == 10) { window.location.reload() }
  }
}