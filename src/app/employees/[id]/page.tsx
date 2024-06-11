'use client';

import { useEmployee } from '../../hooks/useEmployee';
import Image from 'next/image';

type Params = {
  params: {
    id: number;
  };
};

export default function Page({ params }: Params) {
  const employee = useEmployee(params.id);

  return (
    <div>
      {!employee ? (
        'Loading...'
      ) : (
        <>
          <h1 className="text-xl font-bold">{employee.name}</h1>
          <div>
            <Image
              src={employee.image_url}
              alt={`${employee.name} profile image`}
              className="rounded-full object-cover w-[100px] h-[100px]"
              width={100}
              height={100}
            />
          </div>
          <div>
            <p>{employee.email}</p>
            <p>{employee.phone_number}</p>
            <p>{employee.job_title}</p>
          </div>
        </>
      )}
    </div>
  );
}
