let  HatRack = function (runtime) {
this.runtime = runtime;
};

HatRack.prototype.getInfo = function () {
    return {
        id: 'hatrack',
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
            {
                // @todo this hat needs to be set itself to restart existing
                // threads like Scratch 2's behaviour.
                opcode: 'whenMotionGreaterThan',
                text: 'when video motion > [REFERENCE]',
                blockType: Scratch.BlockType.HAT,
                arguments: {
                    REFERENCE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 10
                    }
                }
            }
        ]
    };
};


HatRack.prototype.whenMotionGreaterThan = function (args, util) {

    return  Math.random() >= 0.5;
};


HatRack.prototype.isTipped = function (args) {
    return Math.random() >= 0.5;
};

Scratch.extensions.register(new HatRack());
