import { Link } from "react-router-dom";

const Errorpage = () => {
   
    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-3'>
            <h2 className='text-5xl font-bold text-red-600'>404 Not Found</h2>
            <p>Your path in the URL is not correct</p>
            <Link to='/' className='text-blue-500 btn text-lg'>Go back to Home</Link>
        </div>
    );
};

export default Errorpage;