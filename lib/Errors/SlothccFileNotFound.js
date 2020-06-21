const fs = require('fs');
const path = require('path');

class SlothccFileNotFound extends Error {
    constructor(message, currentFile) {
        super(message);
        this.name = this.constructor.name;
        this.recommendations = ''
    }    
}

module.exports = SlothccFileNotFound;
