export default function StreamTable() {
  return (
    <div className="glass neon-border p-5 mt-8">
      <div className="text-xl font-semibold mb-4">Passive Income Streams</div>

      <table className="w-full text-left text-sm">
        <thead className="text-neon">
          <tr>
            <th className="p-2">Stream</th>
            <th className="p-2">Owner</th>
            <th className="p-2">Status</th>
            <th className="p-2">Earnings</th>
          </tr>
        </thead>

        <tbody className="text-gray-300">
          <tr>
            <td className="p-2">Stationery Global</td>
            <td className="p-2">Boss</td>
            <td className="p-2 text-green-400">Active</td>
            <td className="p-2">₹0.00</td>
          </tr>

          <tr>
            <td className="p-2">JRAVIS Daily Bot</td>
            <td className="p-2">Boss</td>
            <td className="p-2 text-yellow-400">Syncing…</td>
            <td className="p-2">₹0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
