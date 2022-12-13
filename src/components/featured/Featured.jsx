import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total revenue</h1> 
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">  
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          {/* item_1 */}
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <ArrowDownwardIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
          {/* item_2 */}
          <div className="item"> 
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div> 
          {/* item_3 */}
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small"/>
              <div className="resultAmount">12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
