import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import VolunteerPage from './VolunteerPage/VolunteerPage';
import { Button, FormControl, InputGroup, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import { UserContext } from '../../App';


const Home = () => {
    //const [vTasks, setVTasks] = useState([]);
    const {state1, state2 } = useContext(UserContext);
    const [event, setEvent] = state2;
    useEffect( () => {
        fetch('http://localhost:5000/alltasks')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    //  console.log(state2);
    
    // const handleAddVolunteer = () => {
    //     fetch('http://localhost:5000/addTasks' , {
    //         method: 'POST',
    //         headers: { 
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(fakeData)
    //     })
    // }



    return (
        
        <div  className="container">
        <Header></Header>
        <h1 className="text-center font-weight-bold mt-5">
                I GROW BY HELPING PEOPLE IN NEED.
            </h1>
            <Form className="mb-5 mt-5">
                <InputGroup className="mb-3 w-50 m-auto">
                    <FormControl
                    
                        placeholder="Search..."
                    />
                    <InputGroup.Append>
                        <Button >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            <div  className="row container mx-auto mt-5">

                {
                    event.map(task => <VolunteerPage task={task} key={task._id}></VolunteerPage>)
                }
            </div>

        </div>
    );
};

export default Home;