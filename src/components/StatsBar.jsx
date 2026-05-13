export function StatsBar({ totalParticipants, availableParticipants, totalWinners }) {
  const stats = [
    { label: 'Participantes cargados', value: totalParticipants },
    { label: 'Disponibles', value: availableParticipants },
    { label: 'Ganadores acumulados', value: totalWinners },
  ];

  return (
    <section className="stats-bar">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
