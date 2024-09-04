import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks, handleTotalReadingTime}) => { // great! we got the event handler here. now we have to drill it more until we find the button to trigger the event
    // state of data
    const [blogs, setBlogs ] = useState([])

    // data loading
    useEffect(() =>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    }, []) // empty because we will load data only one time and no repetition for any dependencies

    return (
        <div className="md:w-2/3"> {/* all elements of <Blogs> will take 2/3 of width. rest is for <Bookmarks>*/}
            <h1 className="text-4xl font-bold mb-5">Blogs: {blogs.length} </h1> {/* now the entirety of the blogs.json is here. to extract and customize each of them in a different component, we need .map to iterate over each object of the array and call the desired <Blog> (singular 'Blog' not 'Blogs') inside it. */}
        
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleTotalReadingTime={handleTotalReadingTime}> </Blog>) //sending prop as 'blog' & sending prop as 'handleAddToBookmarks for the event 
        }
        
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired, // we added this prop to pass the event handler down to Blog component.
    handleTotalReadingTime: PropTypes.func.isRequired, // we added this prop to pass the event handler down to Blog component.
};

export default Blogs;
