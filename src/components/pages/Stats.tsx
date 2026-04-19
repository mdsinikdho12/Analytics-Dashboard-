import React from "react";
import StatsCard from "../ui/StatsCard";
import { useGetDashbordDataQuery } from "../../features/dashbord/dashboardApi";

const Stats: React.FC = () => {
  const { data, isLoading, isError } = useGetDashbordDataQuery();

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (isError) return <p className="p-10 text-red-500">Error loading Data</p>;

  const overview = data?.overview;

  return (
    <section className="grid grid-cols-3 gap-10 mt-10 items-start">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* sorry for that we cannot map this data for this api response*/}

        <StatsCard
          title="Total Employees"
          disc="Active Staff"
          count={overview?.totalUsers?.toLocaleString() || "0"}
          growth={`+${overview?.growth || 0}%`}
        />
        <StatsCard
          title="ActiveUsers"
          disc="Active user"
          count={overview?.activeUsers?.toLocaleString() || "0"}
          growth={`+${overview?.growth || 0}%`}
        />

        <StatsCard
          title="Present Today"
          disc="Employees Checked In"
          count={overview?.activeUsers?.toLocaleString() || "0"}
          growth="+4%"
        />

        <StatsCard
          title="Total Revenue"
          disc="Earnings This Month"
          count={`$${overview?.revenue?.toLocaleString() || "0"}`}
          growth="+12%"
        />
      </div>

      <div className="h-[400px] bg-white rounded-[32px] shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-xl">Schedule</h2>
        <p className="text-gray-400 mt-4">Upcoming events will appear here.</p>
      </div>
    </section>
  );
};

export default Stats;
