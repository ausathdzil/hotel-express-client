'use client';

import { useCustomers } from '../hooks/useCustomers';
import { lusitana } from '../lib/fonts';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../components/ui/table';
import CustomersCTA from '../components/customers-cta';

export default function Home() {
  const customers = useCustomers();

  return (
    <>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>Customers</h1>
        <Link href="customers/create">
          <Button
            className="bg-zinc-50 p-2 rounded-xl shadow-md transition ease-in-out hover:bg-zinc-100 items-center"
            variant="outline"
          >
            <UserPlusIcon className="w-6 h-6 text-zinc-900" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-zinc-50 p-4 shadow-md gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Address</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers?.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell className="flex justify-center">
                  <CustomersCTA id={customer.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
