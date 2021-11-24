//promise
promise = new Promise((resolve, reject)=>{
    reject()
})

promise
.then(()=> console.log('finally finished!'))
.then(()=> console.log('i wal also run!'))
.catch(()=> console.log('uh oh!!'))

//fetch
url1 = "https://jsonplaceholder.typicode.com/posts/";
url2 = "https://jsonplaceholder.typicode.com/posts343434";

fetch(url1)
    .then(response => response.json())
    .then(data => console.log(data))

fetch(url2)
    .then(response => response.json())
    .catch(error => console.log('BAD', error))
