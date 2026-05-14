import { Sparkles, RotateCcw, Trash2, Trophy } from 'lucide-react';
import { Header } from './components/Header.jsx';
import { ParticipantInput } from './components/ParticipantInput.jsx';
import { DrawControls } from './components/DrawControls.jsx';
import { WinnersPanel } from './components/WinnersPanel.jsx';
import { StatsBar } from './components/StatsBar.jsx';
import { useRaffle } from './hooks/useRaffle.js';
import Footer from "./components/Footer";

export default function App() {
  const raffle = useRaffle();

  return (
    <main className="app-shell">  
      <section className="background-orb orb-one" />
      <section className="background-orb orb-two" />

      <div className="container">
        <Header />

        <StatsBar
          totalParticipants={raffle.participants.length}
          availableParticipants={raffle.availableParticipants.length}
          totalWinners={raffle.allWinners.length}
        />

        <section className="main-grid">
          <article className="card input-card">
            <div className="section-title">
              <Sparkles size={22} />
              <div>
                <h2>Participantes</h2>
                <p>Escribe o pega los nombres, uno por línea.</p>
              </div>
            </div>

            <ParticipantInput
              value={raffle.rawParticipants}
              onChange={raffle.setRawParticipants}
              disabled={raffle.isDrawing}
            />
          </article>

          <article className="card draw-card">
            <div className="section-title">
              <Trophy size={22} />
              <div>
                <h2>Configuración del sorteo</h2>
                <p>Define cuántos ganadores quieres elegir.</p>
              </div>
            </div>

            <DrawControls
              winnersCount={raffle.winnersCount}
              setWinnersCount={raffle.setWinnersCount}
              availableParticipants={raffle.availableParticipants.length}
              isDrawing={raffle.isDrawing}
              rollingName={raffle.rollingName}
              onDraw={raffle.drawWinners}
            />

            {raffle.error && <div className="alert">{raffle.error}</div>}

            <div className="actions-row">
              <button className="secondary-button" onClick={raffle.clearCurrentResults} disabled={raffle.isDrawing}>
                <Trash2 size={18} />
                Limpiar resultados
              </button>
              <button className="secondary-button danger" onClick={raffle.resetRaffle} disabled={raffle.isDrawing}>
                <RotateCcw size={18} />
                Reiniciar todo
              </button>
            </div>
          </article>
        </section>

        <WinnersPanel currentWinners={raffle.currentWinners} allWinners={raffle.allWinners} />
         
        <Footer />
      </div>
    </main>
  );
}
