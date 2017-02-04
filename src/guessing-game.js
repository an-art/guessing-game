class GuessingGame {
    constructor() {
    	this.index = 0;
    	this.minel = 0;
    	this.maxel = 0;
    }

    setRange(min, max) {
    	this.minel = min;
        this.maxel = max;
    }

    guess() {
    	this.index = Math.ceil((this.minel + this.maxel)/2);
    	return this.index;
    }

    lower() {
    	this.maxel = this.index;
    }

    greater() {
    	this.minel = this.index;
    }
}

module.exports = GuessingGame;
