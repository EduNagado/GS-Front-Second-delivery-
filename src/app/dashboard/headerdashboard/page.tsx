"use client"
import { useRouter } from "next/navigation";

const HeaderDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Aqui você pode implementar a lógica de logout
    router.push("/home");
  };

  return (
    <header className="h-16 bg-gray-100 shadow-md flex items-center justify-between px-6">
      <div className="text-lg font-bold"></div>
      <button
        onClick={handleLogout}
        className="text-red-500 hover:underline"
      >
        Sair
      </button>
    </header>
  );
};

export default HeaderDashboard;
