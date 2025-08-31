import useLocalStorage from "./localStorage";




export default function CustomHook() {

    const [username, setUsername] = useLocalStorage("username", "");
    const [userID, setUserID] = useLocalStorage("userID", "");

    return (
        <div>
            <h2>Using created localStorage custom hook multiple times with different fields to get/save data to local storage</h2>

            <label htmlFor="">Name </label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <h3>Hello {username}!</h3>

            

            <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID </label>
            <input type="text" value={userID} onChange={(e)=>setUserID(e.target.value)}/>
            <h3>Your ID is: {userID}</h3>
        </div>
    );
}