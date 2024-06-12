'use client';

import { lusitana } from './lib/fonts';
import DashboardCards from './components/dashboard-cards';
import RecentReservations from './components/recent-reservations-table';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className={`text-3xl font-bold ${lusitana.className}`}>
          Dashboard
        </h1>
        <DashboardCards />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className={`text-2xl font-bold ${lusitana.className}`}>
          Recent Reservations
        </h1>
        <RecentReservations />
      </div>
    </div>
  );
}
