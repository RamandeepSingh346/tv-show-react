import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams ,  Link} from 'react-router-dom';
import BookingForm from './BookingForm';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };
    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>; // Show a loading state while fetching the details
  }

  
  const handleBookingClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='m-5 '>
    <Link to="/" className="btn btn-secondary mb-3">
    Go Back
  </Link>
      <h1 className='mb-3 text-center'>{show.name}</h1>
      <div className="text-center">
        <img src={show.image?.medium} alt={show.name} className="mx-auto" />
        <p className="mt-3 mb-3">{show.summary}</p>
        {/* Display other details about the show */}
        <button onClick={handleBookingClick} className="btn btn-primary">Book Ticket</button>
        {showForm && <BookingForm movieName={show.name} onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default ShowDetails;
