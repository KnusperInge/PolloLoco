class Level{
    enemies; 
    clouds;
    backgroundObjects;
    coins;
    levelEnd_X=2950;

    constructor(enemies,clouds,backgroundObjects,coins){
        this.enemies=enemies;
        this.clouds=clouds;
        this.backgroundObjects=backgroundObjects;
        this.coins=coins;
    }
}