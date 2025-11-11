import { useState } from 'react';
import { CreateStudyRoom, RoomData } from './components/CreateStudyRoom';
import { Mst } from './components/M_StudyRoom';

export default function M_StudyRoom() {
  const [currentRoom, setCurrentRoom] = useState<RoomData | null>(null);

  const handleCreateRoom = (roomData: RoomData) => {
    setCurrentRoom(roomData);
  };

  const handleLeaveRoom = () => {
    setCurrentRoom(null);
  };

  return (
    <>
      {!currentRoom ? (
        <CreateStudyRoom onCreateRoom={handleCreateRoom} />
      ) : (
        <Mst roomData={currentRoom} onLeave={handleLeaveRoom} />
      )}
    </>
  );
}
