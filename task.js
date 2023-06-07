import axios from 'axios'


async function getData(userId) {

    const getUsers = async (id) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        return data
    }


    const getPost = async (id) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
        return data
    }

    const user = await getUsers(userId)
    const posts = await getPost(userId)

    return {user,posts};
}



export default getData;