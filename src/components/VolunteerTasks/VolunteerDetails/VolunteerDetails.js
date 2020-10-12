import React, { useState } from 'react';

const VolunteerDetails = ({ event, deleteHandler }) => {
console.log(event.eventId)
    

    return (
        <div className="col-md-6">
            <div className="shadow p-4 bg-white rounded mb-5 mt-5 card">
                <div className="row">
                    <div className="col-6  ">
                        <img src={event.pic} className="" alt="" />
                    </div>
                    <div>
                        <h2>{event.eventId.name} </h2>
                    </div>
                    <br />
                    <button className="btn btn-primary" onClick={()=>  deleteHandler(event._id) }>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;