class LunchBox {
    constructor(lunchbox) {
        this.owner = lunchbox.owner;
        this.material = lunchbox.madeOf;
        this.shape = lunchbox.shape;
        this.color = lunchbox.color;
        this.handle = true;
        this.snacks = [];
    }
    acquireSnack(snack) {
        snack.isInLunchBox = true;
        this.snacks.push(snack);
    }
    findHealthySnacks() {
        return this.snacks.filter(snack => snack.healthy === true)
    }
}

module.exports = LunchBox;
