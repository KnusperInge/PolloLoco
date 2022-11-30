class Level extends DrawableObject {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottle;
    levelEnd_X = 2950;


    constructor(enemies, clouds, backgroundObjects, coins, bottle) {
        super();
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    }
}