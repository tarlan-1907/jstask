const users = ["Terlan","Huseyn","Leyla","Cefer"]
const objectUsers = [
    {
        name:"Tarlan",
        age:20
    },
    {
        name:"Huseyn",
        age:21
    },
    {
        name:"Leyla",
        age:19
    }
]

// users.push("Ayla")

// users.map((user)=>{
//     console.log(user);
// })

// const user = objectUsers.find((item)=>item.name === "Tarlan")
// console.log(user);

const filterUsers = objectUsers.filter((item) => item.age >= 20)
const filterUsers2 = objectUsers.filter(({name,age}) => age >= 20 && name == "Tarlan")

const isHas = objectUsers.some(({age})=>age==20)
const isEvery= objectUsers.every(({age})=>age==20)


const isInclude = users.includes('Leyla') 
console.log(isInclude);