export const registerEvent = async (data) => {
  try {
    console.log(data);
    const formData = new FormData();

    for (const key in data) {
      if (key === "payment_proof" && data[key]) {
        formData.append("proof_of_payment_url", data?.payment_proof);
      } else {
        formData.append(key, data[key]);
      }
    }

    const res = await fetch(
      `https://dev.kayteegee.in/v-prayukti/api/register`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const response = await res.json();
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getRegistration = async (id) => {
  try {
    const res = await fetch(
      `https://dev.kayteegee.in/v-prayukti/api/register/${id}`
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
