const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const runCommand = require('../runCmd');
const { CompileError } = require('../Errors/index')
const EXECUTABLE_NAME = path.join(process.cwd(), uuidv4());

async function compileProgram(consoleProgram) {
    try {

        console.log("Compiling...");
        await runCommand(`gcc "${consoleProgram}" -o "${EXECUTABLE_NAME}"`)
        console.log("Compiled succesfully.");
    
        return EXECUTABLE_NAME
    } catch (e) {
        throw new CompileError(`Error happend trying to compile './${consoleProgram}'.`);
    }
}

function getExecutable(program, _default) {
    this._isDefault = !!_default;
    this._file = _default || EXECUTABLE_NAME;
    if(this._isDefault) {
        return Promise.resolve(_default);
    } else {
        return compileProgram(program);
    }
}

function deleteExecutable() {
    if(!this._isDefault && this._file) fs.unlink(this._file, () => null);
}

const Executable = {
    get: getExecutable,
    delete: deleteExecutable
}

module.exports = Executable