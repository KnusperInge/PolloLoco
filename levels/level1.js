const level1 = new Level(

    this.setEnemies(),
    this.setClouds(),
    this.setBackground(),
    this.setCoins(),
    this.setBottles()
);

function setEnemies() {
    return [
        new Chicken_Small(),
        new Chicken_Small(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken_Small(),
        new Chicken_Small(),
        new Chicken(),
        new Chicken(),
        new Chicken_Small(),
        new Chicken(),
        new Chicken(),
    ];
}

function setClouds() {
    return [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ];
}

function setBackground() {
    return [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 1),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 1),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 1),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 1),
        new BackgroundObject('img/5_background/layers/air.png', 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 2),
        new BackgroundObject('img/5_background/layers/air.png', 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 3),
        new BackgroundObject('img/5_background/layers/air.png', 4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 4),
    ]
}
function setCoins() {
    return [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
    ]
}

function setBottles() {
    return [
        new bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
    ]
}