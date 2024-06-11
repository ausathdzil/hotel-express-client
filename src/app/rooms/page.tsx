'use client';

import { useRooms } from '../hooks/useRooms';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import RoomsCTA from '../components/rooms-cta';

export default function Home() {
  const rooms = useRooms();

  return (
    <>
      <h1 className="text-3xl font-bold">Rooms</h1>
      <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Room Number</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms?.map((room, index) => (
              <TableRow key={room.id}>
                <TableCell>{room.number}</TableCell>
                <TableCell>{room.type}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>${room.price}</TableCell>
                <TableCell>
                  {room.status === 'Available' ? (
                    <Badge className="bg-green-500 hover:bg-green-400">
                      {room.status}
                    </Badge>
                  ) : (
                    <Badge variant="destructive">{room.status}</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <RoomsCTA id={room.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
