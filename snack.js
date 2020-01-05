class Snack {
    constructor(type) {
        this.type = type;
        this.deliciousLevel = 'extra';
        this.amount = 100;
        this.isInLunchBox = false;
        this.cuttingItClose = false;
        this.healthy = this.checkIfHealthy();
    }
    getEaten() {
        this.amount -= 10;
        if (this.amount <= 20) {
            this.cuttingItClose = true;
        }
    }
    checkIfHealthy() {
        if (this.type.includes('Fruit')) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Snack;
