// setTimeout(()=>{
//     console.log("Hello");
// },5000)


// setInterval(()=>{
//     console.log("Hello");
// },1000)


// const sayHi = (cb) =>{
//     cb();
// };

// sayHi(()=>{
//     console.log("Hello");
// });


import fetch from 'node-fetch'
import axios from 'axios'


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json())
// .then(users => {

//     console.log(users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data=>data.json())
//     .then(posts=>{
//         console.log(posts);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then(data=>data.json())
//         .then(data=> 
//             console.log(data))

//     })
// });


// async function getData(){
//     const data = await ((await fetch("https://jsonplaceholder.typicode.com/users")).json())
    
//     const post1 = await ((await fetch("https://jsonplaceholder.typicode.com/posts/1")).json())
    
//     const post2 = await ((await fetch("https://jsonplaceholder.typicode.com/posts/2")).json())
    
    
    
//     console.log("users",data);
//     console.log("post1",post1);
//     console.log("post2",post2);
// }


// getData()


// (async ()=>{
//         const {data:users} = await  axios("https://jsonplaceholder.typicode.com/users")
        
//         const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1")
        
//         const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2")
        
        
        
//         console.log("users",users);
//         console.log("post1",post1.data);
//         console.log("post2",post2.data);
//     })()



const getUsers = () =>{
    return new Promise(async (resolve,reject)=>{
        const {data}=  await axios("https://jsonplaceholder.typicode.com/users")
        
        resolve(data)
    })
}


const getPost = (id) =>{
    return new Promise(async (resolve,reject)=>{
        const {data}=  await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
        resolve(data)
    })
}

// (async ()=>{

//     try {
//         const users = await getUsers()
//         const post = await getPost(3)

//         console.log(users);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
   

   
// })();



Promise.all([getUsers(),getPost(1)]).then(data=>console.log(data))
