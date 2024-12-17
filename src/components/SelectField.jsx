function SelectField({ label, name, options, register, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        {...register(name)}
        onChange={onChange}
        className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
