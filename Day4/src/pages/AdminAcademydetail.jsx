import React, { useState } from 'react';

function AdminAcademyDetails() {
  // Sample academy details (replace with actual data)
  const [academyDetails, setAcademyDetails] = useState([
    {
      serialNumber: 1,
      playerName: 'Ayanokoji Kiyotaka',
      academyName: 'Grandmaster Minds Chess Academy',
      startingDate: '01/15/2024',
      endingDate: '04/15/2024',
      feesPaid: '$500',
    },
    // Add more rows as needed
  ]);

  // Sample leaderboard data (replace with actual data)
  const [leaderboardData, setLeaderboardData] = useState([
    {
      serialNumber: 1,
      playerName: 'Alice Smith',
      rankingPoints: 1200,
      academyJoinsNow: 'Chess Experts Academy',
      previousAcademy: 'Strategic Chess Institute',
    },
    {
      serialNumber: 2,
      playerName: 'Bob Johnson',
      rankingPoints: 1100,
      academyJoinsNow: 'Strategic Chess Institute',
      previousAcademy: 'Chess Masters Academy',
    },
    {
      serialNumber: 3,
      playerName: 'Charlie Davis',
      rankingPoints: 1000,
      academyJoinsNow: 'Chess Masters Academy',
      previousAcademy: 'Checkmate Strategy School',
    },
    // Add more rows as needed
  ]);

  const [newRecord, setNewRecord] = useState({
    serialNumber: '',
    playerName: '',
    rankingPoints: 0,
    academyJoinsNow: '',
    previousAcademy: '',
  });

  const [selectedRecord, setSelectedRecord] = useState(null);

  // Function to handle adding a new record
  const addRecord = () => {
    setLeaderboardData([...leaderboardData, newRecord]);
    setNewRecord({
      serialNumber: '',
      playerName: '',
      rankingPoints: 0,
      academyJoinsNow: '',
      previousAcademy: '',
    });
  };

  // Function to handle updating a record
  const updateRecord = (index, updatedRecord) => {
    setSelectedRecord(updatedRecord);
  };

  // Function to handle saving updated record
  const saveUpdatedRecord = () => {
    const updatedData = [...leaderboardData];
    updatedData[selectedRecord.index] = {
      ...selectedRecord,
      playerName: selectedRecord.playerName,
      rankingPoints: selectedRecord.rankingPoints,
      academyJoinsNow: selectedRecord.academyJoinsNow,
      previousAcademy: selectedRecord.previousAcademy,
    };
    setLeaderboardData(updatedData);
    setSelectedRecord(null);
  };

  // Function to handle deleting a record
  const deleteRecord = (index) => {
    const updatedData = [...leaderboardData];
    updatedData.splice(index, 1);
    setLeaderboardData(updatedData);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '50px', textAlign: 'center' }}>
      {/* Existing code for displaying leaderboard */}
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
              <th>Actions</th>
            </tr>
            <tr style={{ borderBottom: '2px solid #000' }}></tr>
          </thead>
          <tbody>
            {leaderboardData.map((data, index) => (
              <tr key={data.serialNumber}>
                <td>{data.serialNumber}</td>
                <td>{data.playerName}</td>
                <td>{data.rankingPoints}</td>
                <td>{data.academyJoinsNow}</td>
                <td>{data.previousAcademy}</td>
                <td>
                  <button onClick={() => updateRecord(index, { ...data, index })}>Update</button>
                  <button onClick={() => deleteRecord(index)}>Delete</button>
                </td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Record Section */}
      {selectedRecord && (
        <div>
          <h2>Update Record</h2>
          <div>
            <input
              type="text"
              placeholder="Player Name"
              value={selectedRecord.playerName}
              onChange={(e) => setSelectedRecord({ ...selectedRecord, playerName: e.target.value })}
            />
            <input
              type="number"
              placeholder="Ranking Points"
              value={selectedRecord.rankingPoints}
              onChange={(e) => setSelectedRecord({ ...selectedRecord, rankingPoints: e.target.value })}
            />
            <input
              type="text"
              placeholder="Academy Joins Now"
              value={selectedRecord.academyJoinsNow}
              onChange={(e) => setSelectedRecord({ ...selectedRecord, academyJoinsNow: e.target.value })}
            />
            <input
              type="text"
              placeholder="Previous Academy"
              value={selectedRecord.previousAcademy}
              onChange={(e) => setSelectedRecord({ ...selectedRecord, previousAcademy: e.target.value })}
            />
            <button onClick={saveUpdatedRecord}>Save</button>
          </div>
        </div>
      )}

      {/* Add Record Section */}
      <div>
        <h2>Add New Record</h2>
        <div>
          <input
            type="number"
            placeholder="S.No"
            value={newRecord.serialNumber}
            onChange={(e) => setNewRecord({ ...newRecord, serialNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Player Name"
            value={newRecord.playerName}
            onChange={(e) => setNewRecord({ ...newRecord, playerName: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ranking Points"
            value={newRecord.rankingPoints}
            onChange={(e) => setNewRecord({ ...newRecord, rankingPoints: e.target.value })}
          />
          <input
            type="text"
            placeholder="Academy Joins Now"
            value={newRecord.academyJoinsNow}
            onChange={(e) => setNewRecord({ ...newRecord, academyJoinsNow: e.target.value })}
          />
          <input
            type="text"
            placeholder="Previous Academy"
            value={newRecord.previousAcademy}
            onChange={(e) => setNewRecord({ ...newRecord, previousAcademy: e.target.value })}
          />
          <button onClick={addRecord}>Add Record</button>
        </div>
      </div>
    </div>
  );
}

export default AdminAcademyDetails;
