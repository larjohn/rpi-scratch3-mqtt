let  HatRack = function (runtime) {
this.runtime = runtime;
};

HatRack.prototype.getInfo = function () {
    return {
        id: 'hat_rack',
        name: 'hat rack',
        blocks: [
            {
                opcode: 'tipped',
                blockType: Scratch.BlockType.HAT,
                func: "isTipped",
                text: 'hat tipped',
                arguments: {
                    DIRECTION: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "any"
                    }
                }
            },
            {
                opcode: 'istipped',
                blockType: Scratch.BlockType.BOOLEAN,
                func: "isTipped",
                text: 'hat has been tipped',
                arguments: {
                    DIRECTION: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "any"
                    }
                }
            },
        ]
    };
};

HatRack.prototype.isTipped = function (args) {
    return Math.random() >= 0.5;
};

Scratch.extensions.register(new HatRack());
