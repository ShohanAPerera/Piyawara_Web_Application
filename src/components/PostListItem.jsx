import Image from "./Image";
import { Link } from "react-router-dom";


const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            {/* Image Section */}
            <div className="md:hidden xl:block">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
            </div>
            {/*Details */}
            <div className="flex flex-col gap-4">
                <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <div className="flex items-center gap-2 text-gray-400text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800">John Doe</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span> 
                </div>
            </div>
        </div>
    )
}

export default PostListItem