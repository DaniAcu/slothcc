const runCommand = require('../runCmd')

function checkOutputs(outputs, programOutput) {
    const success = outputs.every(output => programOutput.includes(output))

    if(success){
        console.log("Good job! Your code is working as expected.");
    } else {
        console.log("ERROR! So sorry but your code is not working fine.");
    }
}

function runCases({ inputs, outputs }, executableName) {
    return runCommand(`echo ${inputs.join(' ')} | ${executableName}`)
        .then((programOutput) => {
            console.log(programOutput);
            checkOutputs(outputs, programOutput);
        })
        .catch(console.log.bind(console))
}

module.exports = runCases;