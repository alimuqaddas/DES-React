import axios from 'axios';

export default {
    user:{ 
        login:(credentials) => //Passing credentials to this action
            axios.post ('/users/',{credentials}) // Making async api call
            .then( // If everything is ok, recieving data as Res
                res=>res.data.user)
    }
}