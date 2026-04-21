import React from "react";
import StatsCard from "../ui/StatsCard";
import { useGetDashbordDataQuery } from "../../features/dashbord/dashboardApi";
import ScheduleCard from "../ui/ScheduleCard";
import Tracker from "../charts/Tracker";
import AnalyticsChart from "../charts/ProgressChart";
import TeamCollaboration from "./Teamcollaboration";
import TrainingImpactMetrics from "./TrainingImpactMetrics";

const Stats: React.FC = () => {
  const { data, isLoading, isError } = useGetDashbordDataQuery();

  if (isLoading) return <p className="p-10 text-center">Loading...</p>;
  if (isError)
    return <p className="p-10 text-red-500 text-center">Error loading Data</p>;

  const overview = data?.overview;

  return (
    <div className="p-4 md:p-6 space-y-8">
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 w-full">
              <Tracker />
            </div>
            <div className="lg:col-span-8 w-full">
              <AnalyticsChart data={data?.analytics || []} />
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 h-full">
          <ScheduleCard />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrainingImpactMetrics />

        <TeamCollaboration data={data?.users || []} />
      </section>
    </div>
  );
};

export default Stats;
