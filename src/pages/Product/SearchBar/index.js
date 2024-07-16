import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        location: "",
        experience: "",
        type: "",
        institution: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    console.log(jobCriteria)
    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className={cx('container')}>
            <select onChange={handleChange} name="institution" value={jobCriteria.institution} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Institution</option>
                <option value="IU - VNU">IU - VNU</option>
                <option value="RMIT">RMIT</option>
                <option value="UEL - University of Economics Law">UEL - University of Economics Law</option>
                <option value="UIT - University of Information Technology">UIT - University of Information Technology</option>
                <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Experience</option>
                <option value="Intern">Intern</option>
                <option value="Master degrees">Master degrees</option>
                <option value="Exchange programs">Exchange programs</option>
                {/* <option value="Senior Level">Senior Level</option> */}
            </select>
            <button onClick={search} className={cx('search-btn')}>Search</button>
        </div>
    );
}

export default SearchBar;
