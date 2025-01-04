const products = [
  { id: 1, name: "product_1", price: 300_000 },
  { id: 2, name: "product_2", price: 900_000 },
  { id: 3, name: "product_3", price: 100_000 },
  { id: 4, name: "product_4", price: 200_000 },
  { id: 5, name: "product_5", price: 600_000 },
  { id: 6, name: "product_6", price: 400_000 },
];

export const getAllData = async () => {
  const data = await products.map((item) => item);
  return data
};
