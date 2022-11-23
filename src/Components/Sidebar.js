import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


export default function Sidebar(){

return (
    
        <div className="sidebar">
            <p>hi</p>
         <ul>
         <li className='sidebar-li'> <HomeIcon /><p>Home</p></li>
         <li className='sidebar-li'> <SubscriptionsIcon/><p>Subscriptions</p></li>
         <li className='sidebar-li'> <ThumbUpIcon/><p>Liked Videos</p></li>
           </ul>
        </div>
   
)
}