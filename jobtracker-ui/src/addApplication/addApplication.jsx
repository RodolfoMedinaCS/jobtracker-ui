import Navbar from "../NavBar/navbar.jsx";
import styles from "./addApplication.module.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";


function AddApplication(){

    const navigate = useNavigate();
    const location = useLocation();
    const existingApp = location.state;

    let initialData;

    if(existingApp){
        initialData = {
            company: existingApp.company || "",
            jobTitle: existingApp.jobTitle || "",
            status: existingApp.status || "",
            dateApplied: existingApp.dateApplied || "",
            notes: existingApp.notes || ""
        }
    }else{
        initialData ={
            company: "",
            jobTitle: "",
            status: "",
            dateApplied: "",
            notes: ""
        }
    }

    const [formData, setFormData] = useState(initialData)

    function handleSubmit(){
        if(!formData.company || !formData.jobTitle || !formData.status || !formData.dateApplied
        || !formData.notes){
            alert("please fill out all fields!");
            return;
        }

        if(existingApp){
            fetch(`http://localhost:8080/api/v1/applications/${existingApp.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
        }else{
            fetch("http://localhost:8080/api/v1/applications",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
        }
    }

    function handleCancel(){
        navigate('/dashboard');
    }

    return(
        <>
            <div className={styles.pageWrapper}>
                <Navbar/>
                <div className={styles.appOptions}>
                    <button onClick={handleCancel} >Cancel</button>
                    <button onClick={handleSubmit}>Add + </button>
                </div>

                <div className={styles.contentBody}>
                    <div className={styles.formGroup}>
                        <div className={styles.companyName}>
                            <label>Company: </label>
                            <input type="text" value={formData.company} onChange={(e) =>
                            setFormData({...formData, company: e.target.value})} />
                        </div>

                        <div className={styles.titleName}>
                            <label>Job Title: </label>
                            <input  type="text" value={formData.jobTitle} onChange={(e) =>
                            setFormData({...formData, jobTitle: e.target.value })} />
                        </div>

                        <div className={styles.jobStatus}>
                            <label>Job Status: </label>
                            <select value={formData.status} onChange={(e) =>
                            setFormData({...formData, status: e.target.value})} >
                                <option value="">Select Status</option>
                                <option value="SUBMITTED">Submitted</option>
                                <option value="UNDER_REVIEW">Under Review</option>
                                <option value="INTERVIEW_SCHEDULED">Interview Scheduled</option>
                                <option value="OFFER_EXTENDED">Offer Extended</option>
                                <option value="REJECTED">Rejected</option>
                                <option value="HIRED">Hired</option>
                            </select>
                        </div>

                        <div className={styles.jobNotes}>
                            <label>Job Notes: </label>
                            <textarea value={formData.notes} onChange={(e) =>
                            setFormData({...formData, notes: e.target.value})} >
                            </textarea>
                        </div>

                        <div className={styles.jobDate}>
                            <label>Date Applied: </label>
                            <input type="date" value={formData.dateApplied} onChange={(e) =>
                                setFormData({...formData, dateApplied: e.target.value})} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AddApplication