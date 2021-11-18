export const getData = async () => {
  const res = await fetch("./data.json");
  const pagesContent = await res.json();
  return pagesContent;
};
