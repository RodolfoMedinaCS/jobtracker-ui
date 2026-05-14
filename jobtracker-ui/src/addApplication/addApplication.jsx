import Navbar from "../NavBar/navbar.jsx";
import "./addApplication.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function AddApplication(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        company: "",
        jobTitle: "",
        status: "",
        date: "",
        notes: ""
    })

    function handleSubmit(){
        if(!formData.company || !formData.jobTitle || !formData.status || !formData.date
        || !formData.notes){
            alert("please fill out all fields!");
            return;
        }

        console.log(formData)
    }

    function handleCancel(){
        navigate('/dashboard');
    }

    return(
        <>
            <div className="pageWrapper">
                <Navbar/>
                <div className="appOptions">
                    <button onClick={handleCancel} >Cancel</button>
                    <button onClick={handleSubmit}>Add + </button>
                </div>

                <div className="contentBody">
                    <div className="formGroup">
                        <div className="companyName">
                            <label>Company: </label>
                            <input type="text" onChange={(e) =>
                            setFormData({...formData, company: e.target.value})} />
                        </div>

                        <div className="titleName">
                            <label>Job Title: </label>
                            <input  type="text" onChange={(e) =>
                            setFormData({...formData, jobTitle: e.target.value })} />
                        </div>

                        <div className="jobStatus">
                            <label>Job Status: </label>
                            <select value={formData.status} onChange={(e) =>
                            setFormData({...formData, status: e.target.value})} >
                                <option value="">Select Status</option>
                                <option value="APPLIED">Applied</option>
                                <option value="INTERVIEW">Interview</option>
                                <option value="OFFER">Offer</option>
                                <option value="REJECTED">Rejected</option>
                            </select>
                        </div>

                        <div className="jobNotes">
                            <label>Job Notes: </label>
                            <textarea value={formData.notes} onChange={(e) =>
                            setFormData({...formData, notes: e.target.value})} >
                            </textarea>
                        </div>

                        <div className="jobDate">
                            <label>Date Applied: </label>
                            <input type="date" value={formData.date} onChange={(e) =>
                                setFormData({...formData, date: e.target.value})} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AddApplication