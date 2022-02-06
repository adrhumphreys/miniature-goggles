import { formatRelative, parseISO } from "date-fns";

const timeAgo = (date: string): string => {
  console.log(date);
  //2021-01-27T16:35
  const parsedDate = parseISO(date);
  return formatRelative(parsedDate, new Date());
};

export default timeAgo;
