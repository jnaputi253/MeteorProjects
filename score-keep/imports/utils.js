console.log('Log from /imports/utils.js');

export let greetUser = (name) => {
    if(name) {
        return `Hello, ${name}!`;
    }

    return 'Hello, User!';
}

export let name = 'Juan Naputi';

export default 'Default val';