import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div
        className="grid grid-rows-[min-content_1fr]  grid-cols-1  lg:grid-cols-[250px_1fr] gap-4  h-[calc(100vh-2rem)]">
        {/* header */}
        <header className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow p-4 min-h-24 border-2 border-black"></header>
        {/* side bar */}
        <aside className="hidden lg:block bg-white rounded-xl shadow p-4 min-h-[320px] border-2 border-black">
           
    
        </aside>
        {/* main content */}
        <main className="col-span-1 bg-white rounded-xl shadow p-4 min-h-[320px] border-2 border-black "></main>
      </div>
    </div>
  );
};

export default Dashboard;
