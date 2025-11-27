import BrainStatus from "../components/BrainStatus";
import PhaseTabs from "../components/PhaseTabs";
import StreamTable from "../components/StreamTable";
import IncomeWidget from "../components/IncomeWidget";
import LogFeed from "../components/LogFeed";

export default function Home() {
  return (
    <main className="p-10 space-y-10">
      <h1 className="text-4xl font-bold">🔥 LAKHSYA — JRAVIS Dashboard</h1>

      <BrainStatus />

      <PhaseTabs />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StreamTable />
        <IncomeWidget />
      </div>

      <LogFeed />
    </main>
  );
}
