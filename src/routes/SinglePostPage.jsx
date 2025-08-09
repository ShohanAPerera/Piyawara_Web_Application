import { Link } from "react-router-dom"
import FeaturedPosts from "../components/FeaturedPosts"
import Image from "../components/Image"
import PostmenuActions from "../components/PostmenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex  gap-8'>
        <div className="lg:w-3/5 flex flex-col gap-8 ">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi molestias neque,</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By </span>
            <Link className="text-blue-800 ">Jhon Doe</Link>
            <span>On</span>
            <Link>Web Desdign</Link>
            <span>2 Days Ago</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit modi sed, eligendi velit similique ipsum enim quia. Adipisci repellendus e
            xpedita iure optio necessitatibus, velit soluta qui? Facilis hic quos reiciendis.</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="featured1.jpeg" w="600" className="rounded-3xl" />
        </div>

      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text  */}
        <div className="lg:text-lg flex flex-col gap-6  text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

          </p>
          <p>

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
          <p>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, repellat commodi. Ar
            chitecto dolores facilis laboriosam nesciunt fugit. Fugit eaque de
            serunt similique fuga? Ipsam, rerum aliquid. Ipsam nobis molestiae commodi autem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam magni, ipsum iusto excepturi incidunt unde alias? Consequatur iusto sit laboriosam excepturi libero placeat, praesen
            tium vel? Molestiae exercitationem id cumque!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molliti
            a deserunt illum accusantium, eum eius molestias sunt ducimus laboriosam porro
            labore quam eaque

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio suscipit
            , nulla alias deserunt voluptatibus eum quasi rerum porro doloribus corporis ra
            tione quod fuga, cupiditate eaq
            ue quis? Blanditiis, nam dolor!
            quis vero voluptatibus aut, ipsam tempore minima!

          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-8 ">
              <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
              <Link className="text-blue-800">Jhon Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipis eum recusandae</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostmenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium ">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              Web
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium ">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/> 
    </div>
  )
}

export default SinglePostPage