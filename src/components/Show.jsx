import axios from "axios";
import { useState, useEffect } from "react";


const Home = () => {
    const [getUsers, setGetUsers] = useState({
        user: [],
        config: {}
    })


    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            setGetUsers({...getUsers, user: res.data, config: res.config});
        })
    }, []);


    console.log(getUsers);

  return (
    <div>
        {getUsers.user.map((user) => 
            <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <hr />

            </div>
        )}
   
    </div> 
 );
}

export default Home;
