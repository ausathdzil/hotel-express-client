'use client';

import { useRooms } from '../hooks/useRooms';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../components/ui/table';
import { formatCurrency } from '../lib/utils';
import { Badge } from '../components/ui/badge';
import RoomsCTA from '../components/rooms-cta';

export default function Home() {
  const rooms = useRooms();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>Rooms</h1>
        <Link href="rooms/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <PlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Room Number</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms?.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.id}</TableCell>
                <TableCell>{room.number}</TableCell>
                <TableCell>{room.type}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>{formatCurrency(room.price)}</TableCell>
                <TableCell>
                  {room.status === 'Available' ? (
                    <Badge className="bg-green-500 hover:bg-green-400">
                      {room.status}
                    </Badge>
                  ) : (
                    <Badge variant="destructive">{room.status}</Badge>
                  )}
                </TableCell>
                <TableCell className="flex justify-center">
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
