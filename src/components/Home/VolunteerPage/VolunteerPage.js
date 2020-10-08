import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const VolunteerPage = ({ task }) => {
    const { _id, pic, name, color  } = task;
    const history = useHistory()
   // const {event, setEvent} = useContext(UserContext);
  //  setEvent (task);
    const handleSelect = () => {
        
        console.log(task);
        history.push(`/registration/${_id}`);

    }
    
    return (

        <div onClick={() => handleSelect (_id) } className="col-lg-3 col-sm-6 col-md-3 mt-3 card" style={{ width: '15rem' }}>
            <a href={`/registration/${_id}`}><img className="card-img-top" style={{ height: '300px', backgroundSize: '270px 300px ' }} src={pic} alt=""  />
                <Link to={`/registration/${_id}`}></Link>
                <h3 className="text-center pb-2 text-white" style={{ background: `${color}`}}> {name} </h3>
            </a>
        </div>
    );
};

export default VolunteerPage;