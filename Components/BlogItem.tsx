
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"

interface BlogItemProps {
    title: string;
    description: string;
    category: string;
    image:  StaticImageData; 
    id: string;
  }
  

  const BlogItem: React.FC<BlogItemProps> = ({ title, description, category, image, id }) => {

  return (
    <div className="max-w-[330px] sm:max-[300px] bg-[#000] hover:bg-[#ffffff05] border-2 hover:border-gray-600 border-gray-500/40   p-4 rounded-lg">
     <Link href={`/blogs/${id}`}>
     
      {/* <Image src={image} alt="" width={400} height={400} className="border-b border-black " /> */}
      <img src={image} alt="" className="w-[400px] h-[300px] rounded-lg "  />
     </Link>
      <p className="ml-5  mt-5 px-1 inline-block bg-white  text-black text-sm rounded-sm ">
        {category}
      </p>
       <div className="p-5">
         <h5 className="mb-2 text-lg font-medium tracking-tight text-white">
          {title}
         </h5>
         <p className="mb-3 text-sm tracking-tight text-gray-300/70" dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}>
         </p>
       <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-bold text-center  gap-2 text-white ">
        Read more<FaArrowRight  />
       </Link>
       </div>
    </div>
  )
}

export default BlogItem
