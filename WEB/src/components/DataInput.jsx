export function DataInput({ label, value, onChange, required = true }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <textarea className="border px-3 py-2" id={label} value={value} onChange={onChange} required={required} />
    </>
  );
}
