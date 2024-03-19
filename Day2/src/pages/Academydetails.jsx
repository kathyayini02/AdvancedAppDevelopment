import React from 'react';
import Sidebar from './AdminSidebar';

function AcademyDetails() {
  // Sample academy details (replace with actual data)
  const academyDetails = [
    {
      serialNumber: 1,
      playerName: 'Ayanokoji Kiyotaka',
      academyName: 'Grandmaster Minds Chess Academy',
      startingDate: '01/15/2024',
      endingDate: '04/15/2024',
      feesPaid: '$500',
      // Add more details as needed
    },
    // Add more rows as needed
  ];

  // Sample leaderboard data (replace with actual data)
  const leaderboardData = [
    {
      serialNumber: 1,
      playerName: 'Alice Smith',
      rankingPoints: 1200,
      academyJoinsNow: 'Chess Experts Academy',
      previousAcademy: 'Strategic Chess Institute',
      // Add more details as needed
    },
    {
      serialNumber: 2,
      playerName: 'Bob Johnson',
      rankingPoints: 1100,
      academyJoinsNow: 'Strategic Chess Institute',
      previousAcademy: 'Chess Masters Academy',
      // Add more details as needed
    },
    {
      serialNumber: 3,
      playerName: 'Charlie Davis',
      rankingPoints: 1000,
      academyJoinsNow: 'Chess Masters Academy',
      previousAcademy: 'Checkmate Strategy School',
      // Add more details as needed
    },
    // Add more rows as needed
  ];

  // Extract the top ranker (first player) from the leaderboard
  const topRanker = leaderboardData[0];

  // Extract the rest of the players (excluding the top ranker) for the ranking section
  const rankingData = leaderboardData.slice(1);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Leaderboard</h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Ranking Points</th>
              <th>Academy Joins Now</th>
              <th>Previous Academy</th>
              {/* Add more table headers as needed */}
            </tr>
            <tr style={{ borderBottom: '2px solid #000' }}></tr>
          </thead>
          <tbody>
            {leaderboardData.slice(0, 5).map((data) => (
              <tr key={data.serialNumber}>
                <td>{data.serialNumber}</td>
                <td>{data.playerName}</td>
                <td>{data.rankingPoints}</td>
                <td>{data.academyJoinsNow}</td>
                <td>{data.previousAcademy}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ranking */}
      <h2 style={{ marginBottom: '20px', marginTop: '40px' }}>Ranking</h2>
      <div style={{ overflowX: 'auto', position: 'relative' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Ranking Points</th>
              <th>Academy Joins Now</th>
              <th>Previous Academy</th>
              {/* Add more table headers as needed */}
            </tr>
            <tr style={{ borderBottom: '2px solid #000' }}></tr>
          </thead>
          <tbody>
            {/* Display only the top ranker in the ranking section */}
            <tr key={topRanker.serialNumber} className="glow-animation">
              <td>{topRanker.serialNumber}</td>
              <td>{topRanker.playerName}</td>
              <td>{topRanker.rankingPoints}</td>
              <td>{topRanker.academyJoinsNow}</td>
              <td>{topRanker.previousAcademy}</td>
              {/* Add more table cells as needed */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Academy Details */}
      <h2 style={{ marginBottom: '20px', marginTop: '40px' }}>Your Academy Details</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Academy Name</th>
              <th>Starting Date</th>
              <th>Ending Date</th>
              <th>Fees</th>
              {/* Add more table headers as needed */}
            </tr>
            <tr style={{ borderBottom: '2px solid #000' }}></tr>
          </thead>
          <tbody>
            {academyDetails.map((details) => (
              <tr key={details.serialNumber}>
                <td>{details.serialNumber}</td>
                <td>{details.playerName}</td>
                <td>{details.academyName}</td>
                <td>{details.startingDate}</td>
                <td>{details.endingDate}</td>
                <td>{details.feesPaid}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default AcademyDetails;