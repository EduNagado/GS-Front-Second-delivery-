"use client";

import Sidebar from "./sidebar/page";
import HeaderDashboard from "./headerdashboard/page"; 
import Investimento from "./investimento/page"; 

export default function Dashboard() {
  return (
    <div className="flex h-screen">
     
      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        <HeaderDashboard />

        
        <Investimento />
                 
      </div>
    </div>
  );
}
