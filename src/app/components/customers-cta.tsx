import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteCustomers } from '../lib/actions';
import { useRouter } from 'next/navigation';

export default function CustomersCTA(customers: { id: number }) {
  const router = useRouter();

  return (
    <div className="flex gap-2 items-center">
      <Link
        href={`employees/${customers.id}/update/`}
        className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center"
      >
        <PencilIcon className="w-6 text-zinc-900" />
      </Link>
      <button className="rounded-xl bg-zinc-50 transition ease-in-out hover:bg-zinc-200 p-2 items-center">
        <TrashIcon className="w-6 text-zinc-900" />
      </button>
    </div>
  );
}
