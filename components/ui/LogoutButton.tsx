"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <Button variant="outline" onClick={logout}>
      Logout
    </Button>
  );
}
