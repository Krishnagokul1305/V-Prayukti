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
import ProblemSelectAiml from "../../components/ProblemSelectAIML";
import ProblemSelectIOT from "../../components/ProblemSelectIOT";

function RegisterForm() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const teamSize = searchParams.get("teamSize");
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const fee = searchParams.get("fee");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [minCount, maxCount] = teamSize.split("-").map(Number);
  const [teamCount, setTeamCount] = useState(minCount - 1);
  const { mutate, isPending } = useMutation({
    mutationFn: registerEvent,
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong");
        return;
      }
      reset();
      toast.success("Registered successfully 🎉");
      navigate(`/register/thankyou/${data.application_id}`);
    },
    onError: () => {
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
    if (id != 1 && !data?.payment_proof) {
      toast.error("Payment proof is required");
      return;
    }
    const Data = {
      ...data,
      team_count: data?.team_count || 1,
      event_id: id,
      payment_proof: data?.payment_proof,
      transaction_amount: data?.transaction_amount || 0.01,
      transaction_id: data?.transaction_id || "0",
    };
    if (data?.team_count && Data?.team_count > 1) {
      Data.team_members = convertMembersToTeamMembersFormat(data.members);
    }
    mutate(Data);
  };

  const isOne = maxCount == undefined && minCount == 1;

  return (
    <div>
      <div className="max-w-6xl mt-5 md:mt-0 mb-10 p-5 md:p-10 mx-auto">
        <h1 className="text-lg md:text-2xl text-secondary">Join the event</h1>
        <h2 className="text-3xl md:text-[3vw] font-semibold mt-2">
          {name}{" "}
          {id != 1 && <span className="text-xl text-red-500 me-2">{fee}</span>}
          <br />
          <span className="text-lg text-red-500">
            {type == "Non Technical" &&
              "(#Must have Registered for atleast one technical event)"}
          </span>
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7 bg-stone-900/50 p-3 md:p-5 text-lg mt-10 rounded-xl border border-secondary/20 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-7">
            <InputField
              label={`${isOne ? "Name" : "Team Leader Name"}`}
              name="team_leader_name"
              register={register}
              validation={{ required: "Name is required" }}
              placeholder="Enter the name"
              errors={errors}
            />
            <InputField
              label={`${isOne ? "Email" : "Team Leader Email"}`}
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
            <SelectField
              label={`${isOne ? "Year" : "Team Leader Year"}`}
              name="team_leader_year"
              options={Array.from({ length: 4 }, (_, i) => i + 1)}
              register={register}
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
            <div className="grid md:grid-cols-2 gap-7">
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
              <InputField
                label="Team Name"
                name="team_name"
                register={register}
                validation={{ required: "Team name is required" }}
                placeholder="Enter team name"
                errors={errors}
              />
            </div>
          )}

          {teamCount > 0 && (
            <DynamicMemberFields
              teamCount={teamCount}
              register={register}
              errors={errors}
            />
          )}
          {name == "AIML Hackathon" && (
            <ProblemSelectAiml register={register} />
          )}
          {name == "IOT Hackathon" && (
            <ProblemSelectIOT
              register={register}
              setValue={setValue}
              errors={errors}
            />
          )}

          {id != 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
              <FileUploader
                register={register}
                setValue={setValue}
                errors={errors}
                clearErrors={clearErrors}
                setError={setError}
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
                type="number"
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
