export function ParticipantInput({ value, onChange, disabled }) {
  return (
    <textarea
      className="participants-input"
      placeholder={`Ejemplo:\nMaría Pérez\nCarlos Gómez\nLuisa Martínez\nAndrés Díaz`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
    />
  );
}
