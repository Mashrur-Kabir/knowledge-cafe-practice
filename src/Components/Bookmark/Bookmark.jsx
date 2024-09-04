import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {blog_title} = bookmark; // destructuring bookmark

    return (
        <div className='p-5 rounded-lg bg-white mb-4'>
            <h3 className='font-semibold'>{blog_title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired, // prop type is an object (singular)
};

export default Bookmark;