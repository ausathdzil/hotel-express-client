'use client';

import { useEmployees } from '../hooks/useEmployees';
import Image from 'next/image';

export default function Page() {
  const employees = useEmployees();

  return (
    <>
      <h1 className="text-xl font-bold">Employees</h1>
      <ul className="flex flex-col gap-2">
        {employees?.map((employee, index) => (
          <li
            key={employee.id}
            className="flex justify-start items-center gap-4 bg-zinc-100 rounded-xl p-4"
          >
            <Image
              src={employee.image_url || '/images/placeholder.jpg'}
              alt={`${employee.name} profile image`}
              width={50}
              height={50}
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
            <span>
              {employee.name}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
