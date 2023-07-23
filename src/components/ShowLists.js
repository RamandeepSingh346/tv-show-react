import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowLists = () => {
  const [shows, setShows] = useState([]);
  console.log(shows , ":shoe")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        const  data  = response.data ;
          setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>TV Show List</h1>
      <div className="row row-cols-1 row-cols-md-4 m-4">
        {shows.map((show) => (
          <div className="col mb-4" key={show.show.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={show.show.image?.medium} className="card-img-top" alt="img" />
              <div className="card-body"> 
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">
                  Rating: {show.show.rating?.average ? show.show.rating.average : 'N/A'}
                </p>

                 <Link to={`/show/${show.show.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowLists;
