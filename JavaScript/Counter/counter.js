
    const obj = {counter: 0};

    Object.defineProperty(obj, 'reset',
    {
        get: function() {this.counter = 0;}
    });

    Object.defineProperty(obj, 'increment',
    {
        get: function() {this.counter++;}
    });

    Object.defineProperty(obj, 'decrement',
    {
        get: function() {this.counter--;};
    });

    Object.defineProperty(obj, 'add',
    {
        get: function(value) {this.counter += value;}
    });

    Object.defineProperty(obj, 'subtract',
    {
        get: function(value) {this.counter -= value;}
    });
