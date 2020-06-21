const path = require('path');
const { program } = require('commander');
const Executable = require('../Executable');
const Cases = require('../Cases');
const { CompileError, SlothccFileNotFound } = require('../Errors');

class Slothcc {
    constructor () {
        program
            .option('-c, --cases <type>', 'file with descriptive cases', 'cases.slothcc')
            .option('-p, --program <type>', 'the main.c program to compile and run', '')
            .option('-e, --exec <type>', 'exectuable file to just run');

        program.parse(process.argv);
        
        this._set('_caseFile', program.cases);
        this._set('_program', program.program);
        this._set('_executable', program.exec);

        this.run = this.run.bind(this);
    }

    _set (key, value = '') {
        if(value){
            this[key] = path.relative(process.cwd(), value);
        }
    }

    async run () {
        try {
            const keywords = await Cases.get(this._caseFile);
            const executable = await Executable.get(this._program, this._executable)
            await Cases.run(keywords, executable)
        } catch (err) {
            switch(err.name) {
                case 'CompileError':
                    console.error(err.message);
                case 'SlothccFileNotFound':
                    console.error(err.message);
                break;
            }

            console.log(`Command samples:`)
            console.log(`\n\tslothcc --cases <case_file> --program <c_program_file>`)
            console.log(`\n\tslothcc --cases <case_file> --exec <executable_file>\n`)
            process.exit(1);
        }finally {
            Executable.delete();
            console.log("Done!"); 
        }        
    }

}

module.exports = Slothcc;