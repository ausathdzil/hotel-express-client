'use client';

import { useReservations } from '../hooks/useReservations';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
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
import ReservationsCTA from '../components/reservations-cta';

export default function Home() {
  const reservations = useReservations();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Reservations
        </h1>
        <Link href="reservations/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <DocumentPlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer ID</TableHead>
              <TableHead>Room ID</TableHead>
              <TableHead>Check-In</TableHead>
              <TableHead>Check-Out</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations?.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.id}</TableCell>
                <TableCell>{reservation.customer_id}</TableCell>
                <TableCell>{reservation.room_id}</TableCell>
                <TableCell>
                  {new Date(reservation.check_in).toISOString().split('T')[0]}
                </TableCell>
                <TableCell>
                  {new Date(reservation.check_out).toISOString().split('T')[0]}
                </TableCell>
                <TableCell>
                  {reservation.status === 'paid' ? (
                    <Badge className="bg-green-500 hover:bg-green-400">
                      Paid
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-400 hover:bg-yellow-300">
                      Pending
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="flex justify-center">
                  <ReservationsCTA id={reservation.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
