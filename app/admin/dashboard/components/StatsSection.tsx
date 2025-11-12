export default function StatsSection() {
  const visits = [
    { page: "Home", location: "USA", time: "2025-11-12 10:30 AM" },
    { page: "Gallery", location: "UK", time: "2025-11-12 10:15 AM" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Website Statistics</h2>
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Page</th>
            <th className="p-3">Visitor Location</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((v, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-3">{v.page}</td>
              <td className="p-3">{v.location}</td>
              <td className="p-3">{v.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
