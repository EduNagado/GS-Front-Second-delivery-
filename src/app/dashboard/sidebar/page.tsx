import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        MEF
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2">
              <span className="material-icons">Investimento</span>
            </Link>
          </li>
          <li>
            <p  className="flex items-center space-x-2">
              <span className="material-icons">notifications</span>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
