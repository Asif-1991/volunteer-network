import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';



const RegistrationForm = ({props}) => {
const {state1, state2 } = useContext(UserContext);
const [loggedInUser, setLoggedInUser]= state1;
const [event, setEvent]= state2;
const [eventId, setEventId] = useState({});
const {id} = useParams();
console.log(event);


useEffect( () => {
    fetch('https://polar-reef-13173.herokuapp.com/alltasks')
    .then(res => res.json())
    .then(data => {
        const e = data.find(items=> items._id === id)
        setEventId(e)
    })
}, [id]);

const [selectedDate, setSelectedDate] = useState({
    register: new Date()
});

const handleRegisterDate = (date) => {
    const newDate = { ...selectedDate}
    setSelectedDate(newDate);
};

 const history = useHistory()

const submitHandler = (e) => {
    e.preventDefault();
    const tasks = {...loggedInUser,...selectedDate }
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const info = {name, email, tasks, eventId}

    fetch('https://polar-reef-13173.herokuapp.com/addVolunteerDetail', {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        history.push('/volunteerTasks')
    })
}

    return (
        <div >
            <div className="text-center">
                <img style={{ height: '60px' }} src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer network" />
            </div>
            <div className="d-flex mt-5 justify-content-center align-items-center">
                <div className="col-md-6">
                    <form onSubmit={submitHandler} className="text-center pt-3 pb-2 w-70 shadow bg-white rounded mx-auto mr-5" method="post">
                        <h3 className="">Register as a Volunteer</h3>
                        <br />
                        <input id="name" type="text" defaultValue={loggedInUser.name} name="name" placeholder="Name" />
                        <br />
                        <br />
                        <input id="email" type="email" defaultValue={loggedInUser.email} name="email" placeholder="Email" />
                        <br />
                        <br />
                        <input type="date" onChange={handleRegisterDate} defaultValue="" format="dd/MM/YYYY" name="date" placeholder="date" />
                        <br />
                        <br />
                        <textarea type="text" rows="3" cols="40" name="comment" form="usrForm" placeholder="Description" />
                        <br />
                        <br />
                        <input type="text" defaultValue={eventId.name} name="name" placeholder="Course Name" />
                        <br />
                        <br/>
                        <Button  defaultValue="" type="submit" className="px-4 mx-4">
                            Submit
                       </Button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;