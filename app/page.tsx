"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Smart Gym Management
        </h1>

        <p className="mt-4 text-gray-600">
          Manage gym members, workouts, and subscriptions easily from one dashboard.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Admin Login</Button>
          <Button size="lg" variant="outline">
            Member Login
          </Button>
        </div>
      </div>

    </main>
  );
}
