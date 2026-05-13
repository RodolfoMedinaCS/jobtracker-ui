import './dashboard.css'
import AppCards from "../appCards/appCards.jsx"
import {useEffect, useState} from "react";

function dashboard(){

    const[jobList, setJobList] = useState([]);

    useEffect(() => {
        const fakeData = [
            {
                id: 1,
                company: "Google",
                title: "Frontend Intern",
                status: "Applied",
                date: "June 2nd 2026"
            },
            {
                id: 2,
                company: "Amazon",
                title: "Software Engineer Intern",
                status: "Interview",
                date: "May 2nd 2026"
            },
            {
                id: 3,
                company: "Meta",
                title: "Frontend Intern",
                status: "Applied",
                date: "June 2nd 2026"
            },
            {
                id: 4,
                company: "Netflix",
                title: "Software Engineer Intern",
                status: "Interview",
                date: "May 2nd 2026"
            },
            {
                id: 5,
                company: "X",
                title: "Software Engineer Intern",
                status: "Interview",
                date: "May 2nd 2026"
            }
        ];

        setJobList(fakeData);
    }, []);

    return(
        <>
            <div className="dashboard">

                <div className="filters">
                    <button>All</button>
                    <button>Applied</button>
                    <button>Interviews</button>
                    <button>Offer</button>
                    <button>Rejected</button>
                </div>

                <div className="appsList">
                    {jobList.map((singleJob) => (
                        <AppCards key={singleJob.id} job={singleJob}/>
                    ))}
                </div>


            </div>
        </>
    )
}
export default dashboard