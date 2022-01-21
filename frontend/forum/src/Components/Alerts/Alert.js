import { useSelector } from "react-redux";
import './Alert.css'

export default function Alert() {
    const alerts=useSelector(state=>state.alertReducer)
    var alertcss=""
    alerts.map(alert=>alertcss=alert.alertType)
    return(
        <>
        <div className={`vce-message-box vce vce-message-box-style--${alertcss}`}>
        <div className="vce-message-box-inner">
          <span className="vce-message-box-text">
            {
              alerts.map(alert=><p className="alertText">-&nbsp;{alert.msg}</p>)
            }
        </span>
        </div>
      </div>
        </>
    )
};
