import './appCards.css'
import { Link } from "react-router-dom";

function appCards({job}){
    return(
        <div>
            <Link key={job.id} to={`/applications/${job.id}`} className="applicationCard">
                <div className="metaData">
                    <h3>{job.company}</h3>
                    <p>{job.title}</p>
                </div>

                <div className="metaData">
                    <span>{job.status}</span>
                    <p>{job.date}</p>
                </div>
            </Link>
        </div>
    )
}

export default appCards