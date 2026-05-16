import styles from './applicationDetails.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../NavBar/navbar.jsx";

function ApplicationDetails(){
    const {id} = useParams();
    const[job, setJob] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/applications/${id}`)
            .then(res => res.json())
            .then(data => setJob(data));
    },[])

    function goBack(){
        navigate('/dashboard');
    }

    function handleEdit(){
        navigate('/add-application', {state : job})
    }

    return (
        <>
            <Navbar></Navbar>
            <button onClick={goBack}>Back Button</button>
            <div className={styles.pageWrapper}>
                <div className={styles.detailCard}>

                    {/* Header */}
                    <header className={styles.header}>
                        <h2>Company Name: {job.company}</h2>
                        <label>Job Title: {job.jobTitle}</label>
                    </header>

                    <hr></hr>

                    {/* Info Grid */}
                    <div className={styles.infoGrid}>
                        <label>Status Badge: {job.status}</label>
                        <label>Date Applied: {job.dateApplied}</label>
                        <label>Job URL: </label>
                        <label>Notes: {job.notes}</label>
                    </div>

                    {/*Action Buttons*/}

                    <div className={styles.actionsButtons}>
                        <button>Delete</button>
                        <button onClick={handleEdit} >Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ApplicationDetails