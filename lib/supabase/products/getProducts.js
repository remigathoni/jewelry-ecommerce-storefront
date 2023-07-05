import supabase from "../supabase";

export const getCollection = async (collection, range) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
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
