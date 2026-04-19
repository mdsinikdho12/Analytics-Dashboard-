import React from "react";
import StatsCard from "../ui/StatsCard";
import { useGetDashbordDataQuery } from "../../features/dashbord/dashboardApi";
import ScheduleCard from "../ui/ScheduleCard";
import Tracker from "../charts/Tracker";

const Stats: React.FC = () => {
  const { data, isLoading, isError } = useGetDashbordDataQuery();

  if (isLoading) return <p className="p-10">Loading...</p>;
  if (isError) return <p className="p-10 text-red-500">Error loading Data</p>;

  const overview = data?.overview;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 items-start px-4">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Employees"
          disc="Active Staff"
          count={overview?.totalUsers?.toLocaleString() || "0"}
          growth={`+${overview?.growth || 0}%`}
        />

        <StatsCard
          title="Active Users"
          disc="Active User"
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

        <Tracker />
      </div>

      <div className="lg:col-span-1 w-full">
        <ScheduleCard />
      </div>
    </section>
  );
};

export default Stats;
