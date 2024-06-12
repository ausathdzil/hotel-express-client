'use client';

import { useCustomers } from '../hooks/useCustomers';
import { lusitana } from '../lib/fonts';
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
      <h1 className={`text-3xl font-bold ${lusitana.className}`}>Customers</h1>
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
            {customers?.map((customers) => (
              <TableRow key={customers.id}>
                <TableCell>{customers.id}</TableCell>
                <TableCell>{customers.name}</TableCell>
                <TableCell>{customers.email}</TableCell>
                <TableCell>{customers.phone_number}</TableCell>
                <TableCell>{customers.address}</TableCell>
                <TableCell className="flex justify-center">
                  <CustomersCTA id={customers.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
