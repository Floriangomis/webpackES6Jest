import { testTreeShaking } from "./treeShaking";

export let sum = function(a, b) {
    return a + b;
};

export let testPromise = () => {
    let defered = new Promise( (resolve, reject) => {
        return resolve('test');
    });
    return defered;
};

export let fetchData = () => {
    let root = 'https://jsonplaceholder.typicode.com';

    fetch(
        `${root}/posts/1`, 
        {
            method: 'GET'
        }
    )
    .then( (data) => {
        console.log(data);
    });

    $.ajax({
      url: root + '/posts/1',
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });
}