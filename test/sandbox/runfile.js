import {run} from 'runjs';

const task = {
  'echo': (...args) => {
    console.log('echo ' + args.join(' '))
  },
  'testapi': () => {
    run('ls -al')
  }
};

export default task;