export default function LogFeed() {
  return (
    <div className="glass neon-border p-5 h-full">
      <div className="text-xl font-semibold mb-3">JRAVIS Logs</div>

      <div className="text-sm text-gray-400 space-y-1">
        <div>🟢 System boot completed.</div>
        <div>🟢 Phase-1 automation running.</div>
        <div>🟢 Dashboard sync stable.</div>
      </div>
    </div>
  );
}

