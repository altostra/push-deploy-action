const core = require('@actions/core');
const exec = require('@actions/exec');

async function pushDeploy() {
    try {

        const env = core.getInput('env-name', { required: true });
        const instance = core.getInput('instance-name', { required: true });
        const image = core.getInput('image-name', { required: false });

        console.log(`Deploying ${image} to instance ${instance} at ${env} `)
        await exec.exec(`alto deploy ${instance}${image ? `:${image}` : ''} --env ${env} --push --json`);

    } catch (error) {
        core.setFailed(error.message);
    }

}

pushDeploy()
