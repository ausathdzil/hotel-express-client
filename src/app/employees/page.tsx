'use client';

import { useEmployees } from '../hooks/useEmployees';
import { lusitana } from '../lib/fonts';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import EmployeesCTA from '../components/employees-cta';

export default function Page() {
  const employees = useEmployees();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Employees
        </h1>
        <Link href="employees/create">
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
              <TableHead>Position</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees?.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell className="flex gap-4 items-center">
                  <Image
                    src={employee.image_url}
                    alt={`${employee.name} profile image`}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-[50px] h-[50px]"
                  />
                  <span>{employee.name}</span>
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell className="flex justify-center">
                  <EmployeesCTA id={employee.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
