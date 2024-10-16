import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons"

// const NavItem = ({icon, text}) => {
{/* <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200">
    <FontAwesomeIcon className="text-2xl mr-4" icon={faHome} />
    <span className="text-xl hidden xl:inline">Home</span>
</div> */}
// } da pra melhorar o codigo, mas n muda muito

export const Sidebar = () => {
    return (
        <div className="xl:w-64 sticky top-0 px-2 h-screen">
            <nav className="flex flex-col p-3">
                {/* <NavItem icon={faTwitter} text='twitter'/>
                <NavItem icon={faHome} text='twitter'/> */}

                <div className="p-3 mb-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4 text-blue-400" icon={faTwitter} />
                    {/* <span className="text-xl hidden xl:inline">Home</span> */}
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faHome} />
                    <span className="text-xl hidden xl:inline">Home</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faHashtag} />
                    <span className="text-xl hidden xl:inline">Explore</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faBell} />
                    <span className="text-xl hidden xl:inline">Notification</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faEnvelope} />
                    <span className="text-xl hidden xl:inline">Messages</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faBookmark} />
                    <span className="text-xl hidden xl:inline">Bookmarks</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faUserFriends} />
                    <span className="text-xl hidden xl:inline">Communities</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faTwitter} />
                    <span className="text-xl hidden xl:inline">Premium</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faUser} />
                    <span className="text-xl hidden xl:inline">Profile</span>
                </div>

                <div className="p-3 rounded-full hover:bg-gray-600 transition duration-200 cursor-pointer">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faEllipsisH} />
                    <span className="text-xl hidden xl:inline">More</span>
                </div>

                {/* <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
                    <FontAwesomeIcon className="text-2xl mr-4" icon={faHashtag} />
                    <span className="text-xl hidden xl:inline">Home</span>
                </div> */}
            </nav>
            <button className="bg-blue-400 text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer hover:bg-blue-600 transition duration-300">
                <FontAwesomeIcon icon={faFeatherAlt} className="text-white inline xl:hidden"/>
                <span className="hidden xl:inline">Twitter</span>
            </button>
        </div>
    )
}
