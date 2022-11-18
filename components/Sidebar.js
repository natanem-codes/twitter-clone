import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/24/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalIcon, EllipsisHorizontalCircleIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {
  return (
<div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
{/* Twitter logo */}
<div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width={50} height={50}></Image>
    </div>
     {/* menu */}
    <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active={true}/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
    </div>
    <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="h-10 w10 rounded-full xl:mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnVF6kPOwLxFmwHuLQIn-_f6lLFACKWYdCw&usqp=CAU" />
        <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">Natanem Tadesse</h4>
            <p className="text-gray-500">@natanemcodes</p>
            <p className="h-5 lx:ml-8 hidden xl:inline">...</p>
            
        </div>
    </div>
</div>

  )
}

export default Sidebar