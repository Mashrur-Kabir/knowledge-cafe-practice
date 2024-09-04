import PropTypes from 'prop-types';
// import bookmark from '../../assets/images/bookmark.png';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmarks, handleTotalReadingTime}) => { // singular object from blogs.json after .map and received handleAddToBookmarks from <Blogs>

    const {id, blog_title, date_posted, cover_image, reading_time, hashtags, author_name, author_img} = blog; // destructuring.

    return (
        <div className='mb-14'>
            <img className='w-full max-w-[52.80rem] h-full max-h-[28.125rem] object-cover' src={cover_image} alt={`cover picture`} />
            <div className='flex items-center justify-between my-5 w-full max-w-[52.80rem]'>
                <div className='flex items-center'>
                    <img className='w-[3.50rem] h-[3.50rem] object-cover rounded-full' src={author_img} alt="author_img" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author_name}</h3>
                        <p>{date_posted}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button className='text-2xl text-cyan-600' onClick={() => handleAddToBookmarks(blog)}><IoBookmarks /></button> {/* click will be here but the component to be changed is not found here. so we will search the parent component who used <Bookmarks> . (blog) argument will finally be sent to the event handler where the <Bookmarks> was called */}
                    {/*this is alt for react icon <img className='w-6' src={bookmark} alt="" /> */}
                </div>
            </div>
            <h2 className='-mt-2 text-[2.30rem] font-bold leading-[150%]'>{blog_title}</h2>
            <p className='my-4'>
                {hashtags.map((hashtag, index) => (
                    <span key={index} className='inline-block text-xl text-gray-500 mr-4'>#{hashtag}</span>
                ))}
            </p>
            <button onClick={() => handleTotalReadingTime(reading_time, id)} className='text-blue-600 underline underline-offset-2 hover:decoration-purple-600 hover:text-purple-600 hover:cursor-pointer font-semibold'>Mark As Read</button> {/* sending argument (reading_time) and (id) (id for deletion) to app.jsx to add to event */}
        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleTotalReadingTime: PropTypes.func.isRequired, // this function will be called when the user clicks on 'Mark As Read' button. In this case, it will increment the total reading time.
};

export default Blog;