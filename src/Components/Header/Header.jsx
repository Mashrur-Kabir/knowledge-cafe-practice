import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-6 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>     
    );
};

export default Header;