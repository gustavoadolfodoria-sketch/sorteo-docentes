export function cleanParticipants(rawText) {
  const normalizedNames = rawText
    .split('\n')
    .map((name) => name.trim())
    .filter(Boolean);

  return [...new Set(normalizedNames)];
}

export function pickRandomWinners(participants, winnersCount) {
  const shuffled = [...participants];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, winnersCount);
}
