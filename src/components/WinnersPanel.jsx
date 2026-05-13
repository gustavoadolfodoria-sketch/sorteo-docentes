import { Crown } from 'lucide-react';

export function WinnersPanel({ currentWinners, allWinners }) {
  return (
    <section className="card winners-card">
      <div className="section-title">
        <Crown size={22} />
        <div>
          <h2>Resultados</h2>
          <p>Ganadores de la ronda actual y registro acumulado.</p>
        </div>
      </div>

      {currentWinners.length === 0 ? (
        <div className="empty-state">Los ganadores aparecerán aquí después de realizar el sorteo.</div>
      ) : (
        <div className="winner-grid">
          {currentWinners.map((winner, index) => (
            <article className="winner-card" key={`${winner}-${index}`}>
              <span>Ganador {index + 1}</span>
              <strong>{winner}</strong>
            </article>
          ))}
        </div>
      )}

      {allWinners.length > 0 && (
        <div className="history-box">
          <h3>Historial de ganadores</h3>
          <div className="history-list">
            {allWinners.map((winner, index) => (
              <span key={`${winner}-history-${index}`}>{index + 1}. {winner}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
