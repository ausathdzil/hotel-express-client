'use client';

import { useRouter } from 'next/navigation';
import { createCustomer } from '../../lib/actions';
import Link from 'next/link';

export default function Form() {
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => createCustomer(event, router)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4 bg-zinc-100 p-8 rounded-xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@mail.com"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="123-456-789"
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="123 Elm St."
            className="text-base rounded-xl border text-zinc-900 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Link href="/customers">
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
          Add Customer
        </button>
      </div>
    </form>
  );
}
