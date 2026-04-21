import { Search, SlidersHorizontal } from "lucide-react";

interface Employee {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  joinDate: string;
}

interface Props {
  data: Employee[];
}

const STATUS_CLS: Record<"active" | "inactive", string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-600",
};

export default function EmployeesAwardList({ data }: Props) {
  return (
    <div
      className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 
    shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full"></div>

      <div className="flex justify-between items-center mb-5 relative z-10">
        <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
          Employees List
        </h2>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 focus-within:ring-2 focus-within:ring-emerald-400 transition">
            <Search size={14} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-36 placeholder:text-gray-400"
            />
          </div>

          <button className="flex items-center gap-1 text-sm border border-white/30 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white/50 transition">
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto relative z-10">
        <table className="w-full text-sm text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 text-xs uppercase tracking-wide">
              <th className="px-3 py-2">SL.</th>
              <th className="px-3">Name</th>
              <th className="px-3">Email</th>
              <th className="px-3">Status</th>
              <th className="px-3">Join Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((emp: Employee, index: number) => (
              <tr
                key={emp.id}
                className="bg-white/40 backdrop-blur-md hover:bg-white/60 
                transition rounded-xl shadow-sm">
                <td className="px-3 py-3 font-medium text-gray-700">
                  {String(index + 1).padStart(2, "0")}
                </td>

                <td className="px-3 font-semibold text-gray-900">{emp.name}</td>

                <td className="px-3 text-gray-600">{emp.email}</td>

                <td className="px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                    shadow-sm ${STATUS_CLS[emp.status]}`}>
                    {emp.status}
                  </span>
                </td>

                <td className="px-3 text-gray-600">{emp.joinDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
