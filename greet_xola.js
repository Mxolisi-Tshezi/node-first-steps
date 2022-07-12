import chalk from 'chalk';
import greet from './greet.js'
import figlet from 'figlet';


figlet('Hello Xola!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgGreen.black(greet('Xola!'));
    console.log(styledMessage)    
});