const { exec } = require("child_process");

function runCommand (command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if(err || stderr) reject(err || stderr);
            resolve(stdout);
        })
    })
}

module.exports = runCommand