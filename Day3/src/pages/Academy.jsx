import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Academy = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'Grandmaster Minds Chess Academy', image: 'https://i2.wp.com/sanantonioreport.org/wp-content/uploads/2020/01/ScottBall_san-antonio-chess-tournament-dreamweek-dream-week-education-competition-1-18-2020-3.jpg?fit=2040%2C1360', description: 'Grandmaster Minds Chess Academy is a prestigious institution dedicated to nurturing the next generation of chess champions. Our academy focuses on fostering strategic thinking, tactical precision, and a deep understanding of the game. With a team of experienced instructors and a dynamic curriculum, we empower students to master the complexities of chess, ensuring they reach their full potential on the board. Join us at Grandmaster Minds and embark on a transformative chess journey where excellence and strategic brilliance converge.' },
    { id: 2, name: 'Checkmate Strategy School', image: 'https://www.chessable.com/blog/wp-content/uploads/2021/11/carlsen-jorden.jpg', description: 'Checkmate Strategy School is where chess enthusiasts of all levels come to refine their skills and master the art of strategic play. Our school is committed to providing comprehensive chess education, blending theory with practical insights to elevate your game. With experienced coaches and a supportive community, Checkmate Strategy School is the ultimate destination for those seeking to enhance their chess prowess and achieve checkmate with confidence. Join us and unlock the secrets to strategic success on the chessboard.' },
    { id: 3, name: 'Brilliant Board Strategies Institute', image: 'https://npr.brightspotcdn.com/dims4/default/fdf3d80/2147483647/strip/true/crop/799x419+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F90%2Fe0%2Ffcf2474b4cefb43873d8d8f4a0e0%2F080420-provided-turkeytangochess.jpg', description: 'Brilliant Board Strategies Institute is your gateway to unparalleled chess excellence. Our institute offers a dynamic learning environment where chess enthusiasts can unravel intricate strategies, enhance tactical skills, and foster a deep understanding of the game. With expert guidance and a focus on brilliance, we pave the way for chess enthusiasts to master the board and achieve strategic triumphs. Join Brilliant Board Strategies Institute and embark on a journey to elevate your chess expertise to new heights.' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If the search bar is empty, show all academies
      setSearchResults(colleges);
    } else {
      // If there's a search term, filter academies based on the search term
      const results = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    // Clear the search results to show all academies
    setSearchResults(colleges);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Search Academies</h2>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by academy name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearch}>Clear</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {searchResults.length > 0 ? (
          searchResults.map((college) => (
            <div key={college.id} style={{ width: '60%', margin: '20px auto' }}>
              <Link to={`/user/details/`}>
                <img
                  src={college.image}
                  alt={college.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', cursor: 'pointer' }}
                />
              </Link>
              <h3 style={{ marginTop: '10px', textAlign: 'center' }}>{college.name}</h3>
              <p>{college.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Academy;
