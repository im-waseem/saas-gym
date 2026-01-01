"use client";

import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          {/* LOGOUT */}
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <p className="mt-4 text-gray-600">
          Welcome Admin
        </p>

      </div>
    </main>
  );
}
