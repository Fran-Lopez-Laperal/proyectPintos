export function NumberInput({type, label, value, onChange, required = true }) {
    return (
      <>
        <label htmlFor={label}>{label}</label>
        <input className="border px-3 py-2" type={type} id={label} value={value} onChange={onChange} required={required} />
      </>
    );
  }