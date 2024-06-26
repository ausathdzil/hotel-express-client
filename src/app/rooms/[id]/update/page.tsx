'use client';

import { useRoom } from '../../../hooks/useRoom';
import { useRouter } from 'next/navigation';
import { lusitana } from '../../../lib/fonts';
import { updateRoom } from '../../../lib/actions';
import Link from 'next/link';

export default function Form({ params }: { params: { id: number } }) {
  const room = useRoom(params.id);
  const router = useRouter();

  return (
    <>
      <h1 className={`${lusitana.className} font-bold text-3xl`}>
        Update Room {params.id}
      </h1>
      <form
        onSubmit={(event) => updateRoom(event, params.id, router)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              defaultValue={room?.number}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              defaultValue={room?.type}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              name="capacity"
              defaultValue={room?.capacity}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={room?.price}
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              name="status"
              defaultValue={room?.status}
              disabled
              className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/rooms">
            <button
              type="button"
              className="border border-zinc-900 px-4 py-2 rounded-lg bg-zinc-50 text-zinc-900 transition ease-in-out hover:bg-zinc-900 hover:text-zinc-100"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="border px-4 py-2 rounded-lg bg-zinc-900 text-zinc-100 transition ease-in-out hover:bg-zinc-800"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
