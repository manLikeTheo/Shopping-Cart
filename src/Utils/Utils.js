export const handleValueChange = (e, setQuantity) => {
  console.log(e.target.value);
  const newQuantity = Math.max(e.target.value, 0);
  setQuantity(newQuantity);
};

export const handleIncrement = (setQuantity) => {
  setQuantity((prevQuantity) => prevQuantity + 1);
};

export const handleDecrement = (setQuantity) => {
  setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
};
