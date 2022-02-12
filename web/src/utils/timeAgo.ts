import { formatRelative, parseISO, fromUnixTime } from "date-fns";

type Params = {
  date: string;
  isUnix: boolean;
};

const timeAgo = ({ date, isUnix }: Params): string => {
  console.log(date);
  //2021-01-27T16:35
  const parsedDate = isUnix ? fromUnixTime(parseInt(date)) : parseISO(date);
  return formatRelative(parsedDate, new Date());
};

export default timeAgo;
