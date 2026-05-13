import { Gift } from 'lucide-react';

export function DrawControls({ winnersCount, setWinnersCount, availableParticipants, isDrawing, rollingName, onDraw }) {
  return (
    <div className="draw-controls">
      <label className="field-label" htmlFor="winnersCount">
        Número de ganadores
      </label>
      <input
        id="winnersCount"
        className="number-input"
        type="number"
        min="1"
        max={availableParticipants || 1}
        value={winnersCount}
        onChange={(event) => setWinnersCount(event.target.value)}
        disabled={isDrawing}
      />

      <div className={isDrawing ? 'rolling-box active' : 'rolling-box'}>
        <span>{isDrawing ? 'Seleccionando...' : 'Estado del sorteo'}</span>
        <strong>{rollingName}</strong>
      </div>

      <button className="primary-button" onClick={onDraw} disabled={isDrawing || availableParticipants === 0}>
        <Gift size={20} />
        {isDrawing ? 'Sorteando...' : 'Realizar sorteo'}
      </button>
    </div>
  );
}
