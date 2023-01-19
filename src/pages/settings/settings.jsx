import "./settings.css";
import Sidebar from "../../component/sidebar/sidebar";


export default function settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">

                    <span className="settingsUpadateTitle">Update Your Profile</span>

                    <span className="settingsDelete">Delete Account </span>

                </div> 

                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className="settingsPP">
                        <img className=""
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                         />

                         <label htmlFor="fileInput">
                         <i className="settingsPPIcon far fa-user-circle"></i>
                         </label>
                         <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder="Safak"></input>

                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com"></input>

                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
