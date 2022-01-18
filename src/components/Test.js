

import React,{useState} from 'react'
import axios from 'axios';
function Test() {

    const [users, setUsers] = useState([]);
    
    const apiURL = "https://hlhexpress.com/data.jsonid=2";
    const fetchData = async () => {
      const response = await axios.get(apiURL)
      setUsers(response.data) 
    }
    return (
        <div>
                 <button className="fetch-button" onClick={fetchData}>Click</button>
        </div>
    )
}

export default Test
