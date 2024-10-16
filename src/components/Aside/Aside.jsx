import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { FollowItems } from "./FollowItems"

export const Aside = () => {

   

    const TrendItems = ({ category, name, numberPosts }) => (
        <div className="py-3 bg-gray-800 transition duration-300 cursor-pointer">
            <div className="flex justify-between">
                <p className="text-gray-500 text-sm">{category}</p>
                <FontAwesomeIcon icon={faEllipsisH}/>
            </div>
            <h2 className="text-white">{name}</h2>
            <p className="text-gray-500 text-sm">{`${numberPosts} posts`}</p>
        </div>
    )


    return (
        <aside className="hidden xl:block w-80 p-4">
            <div className="sticky top-0">
                <div className="flex items-center rounded-full bg-gray-800 ">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-500 mx-2" />
                    <input type="text" placeholder="Search Twitter" className="bg-gray-800 p-1 outline-none text-white" />
                </div>
                <div className="bg-gray-800 mt-5 p-3 rounded-xl">
                    <h2 className="font-bold text-lg mb-4">Subscribe to Premium</h2>
                    <p className="text-sm">Subscribe to unlock new features and if eligible, receive a share of of ads revenue.</p>
                    <button className="bg-twitter-blue hover:bg-blue-600 rounded-full px-4 py-2 mt-3 transition duration-300">Subscribe</button>
                </div>
                <div className="bg-gray-800 rounded-xl mt-5 p-3">
                    <h2 className="mb-4 text-lg">What&apos;s happening</h2>
                   
                        <TrendItems category='Bodybuilding · Trending' name='Ramon Dino out of top 5' numberPosts='102,9k' />
                        <TrendItems category='Bodybuilding · Trending' name='Cbum retirement announcement' numberPosts='202,6k' />
                        <TrendItems category='Music · Trending' name='Matuê' numberPosts='21,6k' />
                        <TrendItems category='Bodybuilding · Trending' name='Ronnie Colleman leg press' numberPosts='4,063' />
                        <TrendItems category='Sports · Trending' name='Lebron James career' numberPosts='11,1k' />
                    
                </div>
                <div className="bg-gray-800 rounded-xl mt-5 p-3">
                    <h2 className="text-xl mb-4">Who to follow</h2>
                    <FollowItems name='Elon Musk' username='@MelonMusk'/>
                    <FollowItems name='Chris Bumstead' username='@CbumOlympia6x'/>
                </div>
            </div>
        </aside>
    )
}

Aside.propTypes = {
    TrendItems: PropTypes.func
}




