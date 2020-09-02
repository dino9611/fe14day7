import React from 'react';
import {Link} from 'react-router-dom'

const Topic=()=>{
    return (
      <div>
        ini topic
        <Link to='/product'>
            <button>to Product</button>
        </Link>
      </div>
    )
}
export default Topic