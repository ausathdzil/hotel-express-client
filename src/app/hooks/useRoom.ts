import { useState, useEffect } from 'react';
import { Rooms } from '../lib/definitions';

export function useRoom(id: number): Rooms | undefined {
  const [room, setRoom] = useState<Rooms>();

  useEffect(() => {
    async function fetchRooms(roomId: number) {
      try {
        const response = await fetch(`http://localhost:3001/rooms/${roomId}`, {
          cache: 'no-store',
        });
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRooms(id);
  }, [id]);

  return room;
}
