// we can to call this component wherever we want
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {

    return (
        <div className="w-1/3 p-7 bg-slate-300 rounded-lg"> {/* the "rest" that was referred in <Blogs> returned <div>'s first comment*/}
            <h2 className="text-2xl font-bold text-left mb-4">Bookmarked blogs: {bookmarks.length}</h2>    
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> ) // mapping over each bookmark in the array and returning a div with its title as text.
        }
        
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired, // prop type is an object (singular)
};

export default Bookmarks;