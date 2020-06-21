const fs = require('fs');
const { SlothccFileNotFound } = require('../Errors');

const DEFAULT_FILE = 'cases.slothcc';

const KEY_WORDS = {
    INPUT: 'input:',
    OUTPUT: 'output:'
}

function getCases (file) {
    try {
        const content = fs.readFileSync(file, { encoding:'utf8' }).toString();
        return Promise.resolve(
            compileKeys(
                getKeyContent(
                    getLineList(content)
                )
            )
        )
    } catch (e) {
        const fileName = file.replace(/^.*[\\\/]/, '');
        if(fileName === DEFAULT_FILE) {
            throw new SlothccFileNotFound(
                `Default file doesn't exist. You need create a file 'cases.slothcc' with the cases`
            );
        } else {
            throw new SlothccFileNotFound(
                `Your file (${file}) doesn't exist.`,
                file
            );
        }
    }
}

function getLineList(content) {
    return content.split('\r\n')
}  

function getKeyContent(content) {
    return content.filter(
        line => Object.values(KEY_WORDS).some(key => line.includes(key))
    )
}

function getValuesByKey(line, key) {
    return line.replace(key, '').trim()
}

function compileKeys(content) {
    return content.reduce(
        ({ inputs, outputs }, line) => {
            switch (true) {
                case line.includes(KEY_WORDS.INPUT):
                    return {
                        outputs,
                        inputs: inputs.concat(getValuesByKey(line, KEY_WORDS.INPUT))
                    }
                
                case line.includes(KEY_WORDS.OUTPUT):
                    return {
                        inputs,
                        outputs: outputs.concat(getValuesByKey(line, KEY_WORDS.OUTPUT))
                    }
            }
        },
        {
            inputs: [],
            outputs: []
        }
    )
}

module.exports = getCases;
