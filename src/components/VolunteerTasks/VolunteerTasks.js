import React, { useEffect, useState } from 'react';
import VolunteerDetails from './VolunteerDetails/VolunteerDetails';

const VolunteerTasks = () => {
    const [volunteerData, setVolunteerData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allVolunteerDetail', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setVolunteerData(data));
    }, [])
    console.log(volunteerData);

    const deleteHandler = id => {
        const remainingEvents = volunteerData.filter(items => items._id !== id);
        setVolunteerData(remainingEvents);
        fetch(`https://polar-reef-13173.herokuapp.com/allVolunteerDelete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log("Event Delete Successfully");
            });
        }
        return (

            <div className="">
                <div>
                    <img style={{ height: '60px' }} src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer network" />
                </div>
                <div className="row col-md-6">
                    <h3 className=" pt-3">You have: {volunteerData.length} bookings </h3>

                    <div>
                        <div className=" p-4 bg-white rounded mb-5 mt-5 card-deck">

                            {
                                volunteerData.map(event => <VolunteerDetails event={event} deleteHandler={deleteHandler} key={event._id}></VolunteerDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default VolunteerTasks;