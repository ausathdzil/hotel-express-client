'use client';

import { useRevenue } from './hooks/useRevenue';
import { useReservations } from './hooks/useReservations';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from './components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './components/ui/table';
import { lusitana } from './lib/fonts';
import { Badge } from './components/ui/badge';
import { HomeIcon } from '@heroicons/react/24/outline';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const revenue = useRevenue();
  const reservations = useReservations();

  return (
    <div className="flex flex-col gap-4">
      <h1 className={`text-3xl font-bold ${lusitana.className}`}>Dashboard</h1>
      <div className="flex justify-start gap-4">
        <Card>
          <CardHeader className="gap-2">
            <CardDescription>Total Revenue This Month</CardDescription>
            <CardTitle
              className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
            >
              <BanknotesIcon className="w-6 h-6" />
              {revenue}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="gap-2">
            <CardDescription>Customers Renting</CardDescription>
            <CardTitle
              className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
            >
              <UserGroupIcon className="w-6 h-6" />
              <span>4</span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="gap-2">
            <CardDescription>Rooms Available</CardDescription>
            <CardTitle
              className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
            >
              <HomeIcon className="w-6 h-6" />
              <span>1</span>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="gap-2">
            <CardDescription>Payment Due</CardDescription>
            <CardTitle
              className={`${lusitana.className} text-4xl flex gap-4 justify-center items-center`}
            >
              <ClockIcon className="w-6 h-6" />
              <span>2</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <h1 className={`text-2xl font-bold ${lusitana.className}`}>
        Recent Reservations
      </h1>
      <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer ID</TableHead>
              <TableHead>Room ID</TableHead>
              <TableHead>Check In Date</TableHead>
              <TableHead>Days Remaining</TableHead>
              <TableHead>Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations?.map((reservation) => {
              return (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.customer_id}</TableCell>
                  <TableCell>{reservation.room_id}</TableCell>
                  <TableCell>
                    {new Date(reservation.check_in).toISOString().split('T')[0]}
                  </TableCell>
                  <TableCell></TableCell>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
