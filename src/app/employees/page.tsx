'use client';

import { useEmployees } from '../hooks/useEmployees';
import {
  UserPlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const employees = useEmployees();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Employees</h1>
        <Link
          href="employees/create"
          className="rounded-xl bg-zinc-100 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
        >
          <UserPlusIcon className="w-6 h-6 text-zinc-900" />
        </Link>
      </div>
      <ul className="flex flex-col gap-2">
        {employees?.map((employee, index) => (
          <li
            key={employee.id}
            className="flex justify-between items-center gap-4 rounded-xl bg-zinc-100 p-4"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={employee.image_url}
                alt={`${employee.name} profile image`}
                width={50}
                height={50}
                className="rounded-full object-cover w-[50px] h-[50px]"
              />
              <span>{employee.name}</span>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                href={`employees/update/${employee.id}`}
                className="rounded-xl bg-zinc-100 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
              >
                <PencilIcon className="w-6 h-6 text-zinc-900" />
              </Link>
              <Link
                href={`employees/delete/${employee.id}`}
                className="rounded-xl bg-zinc-100 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
              >
                <TrashIcon className="w-6 h-6 text-zinc-900" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
