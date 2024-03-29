import supabase from "../supabase";

export const getCollection = async (collection, range) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .range(0, range)
      .gt("inventory", 0)
      .eq("collection", collection);
    if (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new Error(error);
    }
    return data;
  } catch (error) {
    return [];
  }
};

export const getAllInCollection = async (collection) => {
  try {
    const { data, error } = await supabase.from("products").select("*").gt("inventory", 0).eq("collection", collection);
    if (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new Error(error);
    }
    return data;
  } catch (error) {
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const { data, error } = await supabase.from("products").select("*").eq("id", id);
    if (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new Error(error);
    }
    return data;
  } catch (error) {
    return [];
  }
};
