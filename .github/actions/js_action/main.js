const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

// function run(){
//     const rastakhiz = core.getInput('rastakhiz');
//     core.notice( `rastakhiz is ${rastakhiz}` )
//     core.setOutput('enqelab', '2026-01-09')
// }

function run(){
    const input = core.getInput('num')
    const num = Number(input);
    
    if (isNaN(num)) {
        core.setFailed(`Please enter number: ${input}`);
        return;
    }

    const input2 = core.getInput('num2')
    const num2 = Number(input2);
    
    if (isNaN(num2)) {
        core.setFailed(`Please enter number: ${input2}`);
        return;
    }

    const result = num + num2;
    core.notice( `Result is ${result}` )
    core.setOutput('Result', result)
}

run()