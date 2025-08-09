import React from 'react-dom';
import Image from "./Image";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className=" flex items-center gap-4">
            <Image src="userImg.jpeg" className="rounded-full w-10 h-10 object-cover" w="40" />
            <span className="font-medium">Jhone Doe</span>
            <span className="text-sm text-gray-500">2 Days Ago</span>
        </div>
        <div className="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui quam magni accusamus 
                necessitatibus? Voluptatem optio non, temporibus maxime, 
                placeat vel itaque quo assumenda, aperiam repellendus voluptatum saepe fugit eaque.</p>
        </div>
    </div>
  )
}

export default Comment