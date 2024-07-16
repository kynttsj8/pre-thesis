import classNames from 'classnames/bind';
import styles from './Product.module.scss'
import SearchBar from './SearchBar';
import JobCard from './OpportunityCard';
import { useEffect, useState } from "react"
import { db } from '../../firebase.config';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    const [jobs, setJobs] = useState([]);
    const [customSearch, setCustomSearch] = useState(false);

    const fetchJobs = async () => {
        setCustomSearch(false);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
        console.log("all jobs: ",tempJobs);
        
    }
    const fetchJobsCustom = async (jobCriteria) => {
        setCustomSearch(true);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, where("type", "==", jobCriteria.type), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"), where("institution", "==", jobCriteria.institution));
        const req = await getDocs(q);

        req.forEach((job) => {
            // console.log(doc.id, " => ", doc.data());
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
        console.log(tempJobs);
    }
    useEffect(() => {
        fetchJobs()
    }, [])
    return (
        <div>
            <div className={cx('title')}>
                <div className={cx('content')}>
                    <h1>
                    <FontAwesomeIcon icon={faBolt} size="xl" style={{color: "#fdc708",}} /> Elevate Your Future <FontAwesomeIcon icon={faBolt} size="xl" style={{color: "#fdc708",}} /> 
                    </h1>
                    <h2>Your Gateway to Postgraduate Success</h2>
                </div>
            </div>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
            {customSearch &&
                <div className={cx('clearBtn-container')}>
                    <button onClick={fetchJobs} className={cx('clearFilter-btn')}>
                        <p>Clear Filter</p>
                    </button>
                </div>
            }
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))
            ) : (
                <p>No jobs found</p>
            )}
        </div>
    );
}

export default Product;