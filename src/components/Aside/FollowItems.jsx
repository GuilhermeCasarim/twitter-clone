import { generateImages } from "../../utils/generateImages"

export const FollowItems = ({ name, username }) => {

    const avatar = generateImages(`${name}${Math.floor(Math.random() * 1000)}@email.com`)
// img ta mudando sozinha, tem q resolver; só fica normal se desativar a criacao de tweets aleatorios no app
    return (
        <div className="mt-4 flex items-center justify-between hover:bg-gray-800 duration-300">
            <div className="flex items-center">
                <img src={avatar} alt="avatar_image" className="rounded max-w-full" />
                <div className="ml-2">
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500">{username}</p>
                </div>
            </div>
            
                <button className='px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-300 duration-300'>Follow</button>
            
        </div>
    )
}

