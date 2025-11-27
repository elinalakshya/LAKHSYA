export default function StreamTable() {
  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold mb-4">📡 Stream Activity</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th>Stream</th>
            <th>Status</th>
            <th>Last Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon KDP</td>
            <td className="text-green-400">Active</td>
            <td>Publishing...</td>
          </tr>
          <tr>
            <td>Canva Automation</td>
            <td className="text-yellow-400">Drafting</td>
            <td>Generating Designs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
