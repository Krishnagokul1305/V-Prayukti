export const getAllEvents = async () => {
  try {
    const res = await fetch(`https://vprayukti.kayteegee.in/api/events`);
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

export const getEvent = async (id) => {
  try {
    const res = await fetch(`https://vprayukti.kayteegee.in/api/events/${id}`);
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

export const getWorkShops = async () => {
  try {
    const res = await fetch(`https://vprayukti.kayteegee.in/api/workshops`);
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

export const getCombos = async () => {
  try {
    const res = await fetch(`https://vprayukti.kayteegee.in/api/combos`);
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
