import BrainStatus from "../components/BrainStatus";
import IncomeWidget from "../components/IncomeWidget";
import StreamTable from "../components/StreamTable";
import LogFeed from "../components/LogFeed";
import PhaseTabs from "../components/PhaseTabs";

export default function Page() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="text-3xl font-bold tracking-wider text-center">
        🧠 JRAVIS — Mission 2040 Dashboard
      </div>

      {/* PHASE TABS */}
      <PhaseTabs />

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* BRAIN STATUS */}
        <BrainStatus />

        {/* TOTAL INCOME */}
        <IncomeWidget />

        {/* LOG BOX */}
        <LogFeed />
      </div>

      {/* STREAM TABLE */}
      <StreamTable />

    </div>
  );
}
