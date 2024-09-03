import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    // state of data
    const [blogs, setBlogs ] = useState([])

    // data loading
    useEffect(() =>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, []) // empty because we will load data only one time and no repetition for any dependencies

    return (
        <div>
            
        </div>
    );
};

export default Blogs;
