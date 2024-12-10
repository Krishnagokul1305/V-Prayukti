import { HiPaperAirplane } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FileUploader from "../../components/FileUploader";
import { convertMembersToTeamMembersFormat } from "../../utils/helper";
import { registerEvent } from "../../services/apiRegister";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register({ name, teamSize, id }) {
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
      console.log(error);
      toast.error(error.message);
      toast.error("Something went wrong");
    },
  });

  const onSubmit = (data) => {
    if (!data.payment_proof) {
      toast.error("Payment proof is required");
      return;
    }
    const Data = {
      ...data,
      payment_proof: data.payment_proof,
      team_count: data?.team_count ? data?.team_count : 1,
      event_id: id,
    };
    if (data?.team_count && Data.team_count > 1) {
      Data.members = convertMembersToTeamMembersFormat(data.members);
    }
    mutate(Data);
  };

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
  return (
    <div className="py-10 mt-20 px-3">
      <div className="max-w-6xl mb-10 p-5 md:p-10 mx-auto">
        <h1 className="text-lg md:text-2xl text-secondary">Join the event</h1>
        <h2 className="text-3xl md:text-[3vw] font-semibold mt-2">{name}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-xl mt-7 bg-gradient-to-r space-y-7 bg-stone-900/50 border border-secondary/20 shadow-sm shadow-secondary/50 rounded-xl p-5"
        >
          <div className="grid md:grid-cols-2 gap-7 md:gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="teamLeaderName">Team Leader Name</label>
              <input
                {...register("team_leader_name", {
                  required: "Name is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter the name"
              />
              {errors.teamLeaderName && (
                <p className="text-red-500 text-sm">
                  {errors.teamLeaderName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="teamLeaderEmail">Team Leader Email</label>
              <input
                {...register("team_leader_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter the email"
              />
              {errors.teamLeaderEmail && (
                <p className="text-red-500 text-sm">
                  {errors.teamLeaderEmail.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="department">Department</label>
              <input
                {...register("team_leader_department", {
                  required: "Department is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter team leader department"
              />
              {errors.department && (
                <p className="text-red-500 text-sm">
                  {errors.department.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="year">Year</label>
              <input
                {...register("team_leader_year", {
                  required: "Year is required",
                })}
                type="number"
                max={4}
                min={1}
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter the year"
              />
              {errors.year && (
                <p className="text-red-500 text-sm">{errors.year.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone no</label>
              <input
                {...register("team_leader_phone", {
                  required: "phone no is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter the phone number"
              />
              {errors.year && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="college">College</label>
              <input
                {...register("team_leader_college", {
                  required: "College is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter college name"
              />
              {errors.college && (
                <p className="text-red-500 text-sm">{errors.college.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="team_name">Team name</label>
              <input
                {...register("team_name", {
                  required: "College is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter team name"
              />
              {errors.team_name && (
                <p className="text-red-500 text-sm">
                  {errors.team_name.message}
                </p>
              )}
            </div>
            {maxCount > 1 && (
              <div className="flex flex-col gap-2">
                <label htmlFor="teamCount">Team Members Count</label>
                <select
                  {...register("team_count")}
                  onChange={handleTeamCountChange}
                  className="rounded-lg w-full border select border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                >
                  {Array.from(
                    { length: maxCount - minCount + 1 },
                    (_, i) => i + minCount
                  ).map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Dynamic Team Members */}
          {maxCount > 1 && teamCount > 0 && (
            <div className="mt-5 space-y-5">
              {[...Array(teamCount)].map((_, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`members.${index}.name`}>
                      Member {index + 1} Name
                    </label>
                    <input
                      {...register(`members.${index}.name`, {
                        required: "Name is required",
                      })}
                      type="text"
                      className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                      placeholder={`Enter Member ${index + 1} Name`}
                    />
                    {errors.members?.[index]?.name && (
                      <p className="text-red-500 text-sm">
                        {errors.members[index].name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`members.${index}.email`}>
                      Member {index + 1} Email
                    </label>
                    <input
                      {...register(`members.${index}.email`, {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="text"
                      className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                      placeholder={`Enter Member ${index + 1} Email`}
                    />
                    {errors.members?.[index]?.email && (
                      <p className="text-red-500 text-sm">
                        {errors.members[index].email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor={`members.${index}.phone`}>
                      Member {index + 1} Phone
                    </label>
                    <input
                      {...register(`members.${index}.phone`, {
                        required: "Phone is required",
                      })}
                      type="text"
                      className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                      placeholder={`Enter Member ${index + 1} Phone`}
                    />
                    {errors.members?.[index]?.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.members[index].phone.message}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
            <FileUploader
              register={register}
              setValue={setValue}
              errors={errors}
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="transaction_amount">Amount paid</label>
              <input
                {...register("transaction_amount", {
                  required: "transaction_amount is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="amount paid"
              />
              {errors.transaction_amount && (
                <p className="text-red-500 text-sm">
                  {errors.transaction_amount.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="transaction_id">Transaction Id</label>
              <input
                {...register("transaction_id", {
                  required: "transaction_id is required",
                })}
                type="text"
                className="rounded-lg w-full border border-secondary/10 bg-stone-800/50 px-4 py-3 focus:outline-none text-lg"
                placeholder="Enter the transaction id"
              />
              {errors.transaction_id && (
                <p className="text-red-500 text-sm">
                  {errors.transaction_id.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-secondary hover:bg-secondary/80 text-white text-xl px-4 rounded-xl py-3 ms-auto flex items-center gap-2"
          >
            {isPending ? (
              "Registering..."
            ) : (
              <span className="flex items-center gap-2">
                Register <HiPaperAirplane className="size-5" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
