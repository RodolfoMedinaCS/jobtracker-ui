import styles from './dashboard.module.css'
import AppCards from "../appCards/appCards.jsx"
import {useEffect, useState} from "react";
import Navbar from "../NavBar/navbar.jsx";

function dashboard(){

    const[jobList, setJobList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/applications")
            .then(res => res.json()).then(data => setJobList(data))
    }, [])

    return(
        <>
            <div className={styles.dashboard}>

                <Navbar></Navbar>

                <div className={styles.filters}>
                    <button>All</button>
                    <button>Applied</button>
                    <button>Interviews</button>
                    <button>Offer</button>
                    <button>Rejected</button>
                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.appsList}>
                        {jobList.map((singleJob) => (
                            <AppCards key={singleJob.id} job={singleJob}/>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}></div>
            </div>
        </>
    )
}
export default dashboard