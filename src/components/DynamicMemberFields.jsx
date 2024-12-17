import InputField from "./InputField";

function DynamicMemberFields({ teamCount, register, errors }) {
  return (
    <div className="mt-5 space-y-5">
      {[...Array(teamCount)].map((_, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-5">
          <InputField
            label={`Member ${index + 1} Name`}
            name={`members.${index}.name`}
            register={register}
            validation={{ required: "Name is required" }}
            placeholder={`Enter Member ${index + 1} Name`}
            errors={errors.members?.[index]}
          />
          <InputField
            label={`Member ${index + 1} Email`}
            name={`members.${index}.email`}
            type="email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            placeholder={`Enter Member ${index + 1} Email`}
            errors={errors.members?.[index]}
          />
          <InputField
            label={`Member ${index + 1} Phone`}
            name={`members.${index}.phone`}
            register={register}
            validation={{ required: "Phone is required" }}
            placeholder={`Enter Member ${index + 1} Phone`}
            errors={errors.members?.[index]}
          />
        </div>
      ))}
    </div>
  );
}

export default DynamicMemberFields;
