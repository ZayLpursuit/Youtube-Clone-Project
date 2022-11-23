import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';

import { useNavigate } from 'react-router-dom';



export default function Sidebar(){
    const navigate=useNavigate()

return (
    
        <div className="sidebar">
            <p>hi</p>
         <ul>
         <li className='sidebar-li' onClick={()=>navigate("/")}> <HomeIcon /><p>Home</p></li>
         <li className='sidebar-li'> <SubscriptionsIcon/><p>Subscriptions</p></li>
         <li className='sidebar-li'> <ThumbUpIcon/><p>Liked Videos</p></li>
         <li className='sidebar-li'> <HistoryIcon/><p>History</p></li>
         <li className='sidebar-li'> <ScheduleIcon/><p>Watch Later</p></li>
         <li className='sidebar-li'> <VideoLibraryIcon/><p>Library</p></li>
           </ul>
        </div>
   
)
}