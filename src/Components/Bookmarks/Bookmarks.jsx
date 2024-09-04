// we can to call this component wherever we want
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => { /* we passed readingTime as a prop to the Bookmarks component */

    return (
        <div className="w-1/3"> {/* the "rest" that was referred in <Blogs> returned <div>'s first comment*/}
            <h2 className="bg-slate-300 text-2xl rounded-lg font-bold text-center text-purple-600 py-5 px-12 mb-5">Reading time: {readingTime} minutes</h2> 
            <div className='p-7 bg-slate-300 rounded-lg'>
                <h2 className="text-2xl font-bold text-left mb-4">Bookmarked blogs: {bookmarks.length}</h2>    
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> ) // mapping over each bookmark in the array and returning a div with its title as text.
                    }
            </div>       
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired, // prop type is an object (singular)
    readingTime: PropTypes.number
};

export default Bookmarks;

/* bookmark.id as key would duplicate here since we can add the same blog title multiple times */