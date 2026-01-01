"use client";

import { Button } from "@/components/ui/button";

export default function MemberPage() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Member Dashboard</h1>

          {/* LOGOUT BUTTON */}
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <p className="mt-4 text-gray-600">
          Welcome, <span className="font-semibold">{user?.email}</span>
        </p>

      </div>
    </main>
  );
}
