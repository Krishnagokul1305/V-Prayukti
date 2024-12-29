function InputField({
  label,
  name,
  register,
  validation,
  placeholder,
  errors,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name, validation)}
        type={type}
        className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
        placeholder={
          name == "transaction_amount" ? "enter numerical values" : placeholder
        }
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}

export default InputField;
