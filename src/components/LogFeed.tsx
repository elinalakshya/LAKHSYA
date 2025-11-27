export default function LogFeed() {
  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold mb-4">📜 Live JRAVIS Logs</h2>

      <div className="h-60 overflow-y-auto text-gray-300 text-sm">
        <p>• JRAVIS started Phase-1 Upload Sequence</p>
        <p>• Generating content for 12 streams</p>
        <p>• Human-Mode timings applied</p>
      </div>
    </div>
  );
}
