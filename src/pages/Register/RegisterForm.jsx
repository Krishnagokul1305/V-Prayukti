import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import DynamicMemberFields from "../../components/DynamicMemberFields";
import FileUploader from "../../components/FileUploader";
import { convertMembersToTeamMembersFormat } from "../../utils/helper";
import { registerEvent } from "../../services/apiRegister";
import { HiPaperAirplane } from "react-icons/hi";

function RegisterForm() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const teamSize = searchParams.get("teamSize");
  const id = searchParams.get("id");

  console.log(name, teamSize, id);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [minCount, maxCount] = teamSize.split("-").map(Number);
  const [teamCount, setTeamCount] = useState(minCount - 1);

  const { mutate, isPending } = useMutation({
    mutationFn: registerEvent,
    onSuccess: (data) => {
      reset();
      toast.success("Registered successfully 🎉");
      navigate(`/register/thankyou/${data.application_id}`);
    },
    onError: (error) => {
      toast.error("Something went wrong");
    },
  });

  const handleTeamCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setTeamCount(count - 1);
    const members = Array.from({ length: count - 1 }, () => ({
      name: "",
      email: "",
      phone: "",
    }));
    setValue("members", members);
  };

  const onSubmit = (data) => {
    if (id!=1&&!data?.payment_proof) {
      toast.error("Payment proof is required");
      return;
    }
    const Data = {
      ...data,
      team_count: data?.team_count || 1,
      event_id: id,
      payment_proof: data?.payment_proof,
      transaction_amount: data?.transaction_amount || 0.01,
      transaction_id: data?.transaction_id || '0',
    };
    if (data?.team_count && Data?.team_count > 1) {
      Data.team_members = convertMembersToTeamMembersFormat(data.members);
    }
    mutate(Data);
  };

  return (
    <div>
      <div className="max-w-6xl mt-5 md:mt-0 mb-10 p-4 md:p-10 mx-auto">
        <h1 className="text-lg md:text-2xl text-secondary">Join the event</h1>
        <h2 className="text-3xl md:text-[3vw] font-semibold mt-2">{name}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 bg-stone-900/50 p-3 md:p-5 text-lg mt-10 rounded-xl border border-secondary/20 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-7">
            <InputField
              label="Team Leader Name"
              name="team_leader_name"
              register={register}
              validation={{ required: "Name is required" }}
              placeholder="Enter the name"
              errors={errors}
            />
            <InputField
              label="Team Leader Email"
              name="team_leader_email"
              type="email"
              register={register}
              validation={{
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              }}
              placeholder="Enter the email"
              errors={errors}
            />
            <InputField
              label="Department"
              name="team_leader_department"
              register={register}
              validation={{ required: "Department is required" }}
              placeholder="Enter the department"
              errors={errors}
            />
            <InputField
              label="Year"
              name="team_leader_year"
              type="number"
              register={register}
              validation={{ required: "Year is required" }}
              placeholder="Enter the year"
              errors={errors}
            />
            <InputField
              label="Phone Number"
              name="team_leader_phone"
              register={register}
              validation={{ required: "Phone number is required" }}
              placeholder="Enter the phone number"
              errors={errors}
            />
            <InputField
              label="College"
              name="team_leader_college"
              register={register}
              validation={{ required: "College is required" }}
              placeholder="Enter college name"
              errors={errors}
            />
          </div>

          {maxCount > 1 && (
            <SelectField
              label="Team Members Count"
              name="team_count"
              options={Array.from(
                { length: maxCount - minCount + 1 },
                (_, i) => i + minCount
              )}
              register={register}
              onChange={handleTeamCountChange}
            />
          )}

          {teamCount > 0 && (
            <DynamicMemberFields
              teamCount={teamCount}
              register={register}
              errors={errors}
            />
          )}
          {id != 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
              <FileUploader
                register={register}
                setValue={setValue}
                errors={errors}
              />
              <InputField
                label="Transaction Id"
                name="transaction_id"
                register={register}
                validation={{ required: "transaction_id is required" }}
                placeholder="Enter the transaction id"
                errors={errors}
              />
              <InputField
                label="Account Holder Name"
                name="account_holder_name"
                register={register}
                validation={{ required: "Account Holder Name is required" }}
                placeholder="Enter the name"
                errors={errors}
              />
              <InputField
                label="Transaction Amount"
                name="transaction_amount"
                register={register}
                validation={{ required: "transaction_amount is required" }}
                placeholder="Enter the amount"
                errors={errors}
              />
            </div>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="bg-secondary hover:bg-secondary/80 text-white text-xl px-4 rounded-xl py-3 ms-auto flex items-center gap-2"
          >
            {isPending ? (
              "Registering..."
            ) : (
              <span className="flex items-center gap-2">
                Register <HiPaperAirplane className="size-5 rotate-90" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
