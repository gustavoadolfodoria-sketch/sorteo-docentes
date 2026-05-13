import { useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { cleanParticipants, pickRandomWinners } from '../utils/raffle.js';

const DRAW_ANIMATION_TIME = 2200;
const ROLLING_INTERVAL_TIME = 80;

export function useRaffle() {
  const [rawParticipants, setRawParticipants] = useState('');
  const [winnersCount, setWinnersCount] = useState(1);
  const [excludedWinners, setExcludedWinners] = useState([]);
  const [currentWinners, setCurrentWinners] = useState([]);
  const [allWinners, setAllWinners] = useState([]);
  const [rollingName, setRollingName] = useState('Esperando sorteo');
  const [isDrawing, setIsDrawing] = useState(false);
  const [error, setError] = useState('');

  const participants = useMemo(() => cleanParticipants(rawParticipants), [rawParticipants]);

  const availableParticipants = useMemo(
    () => participants.filter((name) => !excludedWinners.includes(name)),
    [participants, excludedWinners]
  );

  function validateDraw() {
    setError('');

    if (participants.length === 0) {
      setError('Debes ingresar al menos un participante.');
      return false;
    }

    if (availableParticipants.length === 0) {
      setError('Ya no hay participantes disponibles para sortear.');
      return false;
    }

    if (Number(winnersCount) < 1) {
      setError('La cantidad de ganadores debe ser mínimo 1.');
      return false;
    }

    if (Number(winnersCount) > availableParticipants.length) {
      setError('La cantidad de ganadores no puede superar los participantes disponibles.');
      return false;
    }

    return true;
  }

  function launchConfetti() {
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.65 } });
  }

  function drawWinners() {
    if (isDrawing || !validateDraw()) return;

    setIsDrawing(true);
    setCurrentWinners([]);

    const interval = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableParticipants.length);
      setRollingName(availableParticipants[randomIndex]);
    }, ROLLING_INTERVAL_TIME);

    window.setTimeout(() => {
      window.clearInterval(interval);

      const selectedWinners = pickRandomWinners(availableParticipants, Number(winnersCount));

      setCurrentWinners(selectedWinners);
      setAllWinners((prev) => [...prev, ...selectedWinners]);
      setExcludedWinners((prev) => [...prev, ...selectedWinners]);
      setRollingName('¡Sorteo finalizado!');
      setIsDrawing(false);
      launchConfetti();
    }, DRAW_ANIMATION_TIME);
  }

  function clearCurrentResults() {
    setCurrentWinners([]);
    setRollingName('Resultados limpiados');
    setError('');
  }

  function resetRaffle() {
    setExcludedWinners([]);
    setCurrentWinners([]);
    setAllWinners([]);
    setRollingName('Sorteo reiniciado');
    setError('');
  }

  return {
    rawParticipants,
    setRawParticipants,
    participants,
    availableParticipants,
    winnersCount,
    setWinnersCount,
    excludedWinners,
    currentWinners,
    allWinners,
    rollingName,
    isDrawing,
    error,
    drawWinners,
    clearCurrentResults,
    resetRaffle,
  };
}
