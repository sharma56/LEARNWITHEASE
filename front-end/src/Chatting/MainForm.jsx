import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MainForm = ()=>{
    const navigate = useNavigate();
    const [error,setError]=useState("");
    const [data,setData]=useState({
        name:"",
        room:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value);
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const validation=()=>{
        if(!data.name){
            setError("Please Enter your Name");
            return false
        }
        if(!data.room){
            setError("Plz select below options");
            return false
        }
        setError("");
        return true
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const isValid=validation();
        if(isValid){
            navigate(`/chat/${data.room}`,{state:data})
        }   
    }
    return(
        <div className="px-3 py-4 shadow bg-white text-dark border rounded row  ">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="text-warning mb-4">Welcome to ChatBox</h2>
                </div>
                <div className="form-group mb-4">
                    <input type="text" className="form-control bg-light" name="name" onChange={handleChange} placeholder="Enter your Name" />
                </div>
                <div className="form-group mb-4">
                    <select className="form-select bg-light" onChange={handleChange} name="room">
                    <option value="">Select Room</option>
                    <option value="room 1">Room 1</option>
                    <option value="room 2" >Room 2</option>
                    <option value="room 3">Room 3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning w-100 mb-2">Submit</button>
                {error?<small className="text-danger">{error}</small>:""}
            </form>
        </div>
    );
}
export default MainForm;