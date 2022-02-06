import Fuse from "fuse.js";
import { useState } from "react";

const useFuse = <T>(
  data: ReadonlyArray<T>,
  options: Fuse.IFuseOptions<T>
): {
  result: Fuse.FuseResult<T>[];
  onSearch: (input: string) => void;
  term: string;
  reset: () => void;
} => {
  const [term, onSearch] = useState("");

  const fuse = new Fuse(data, options);

  const result = fuse.search(`${term}`);

  const reset = () => onSearch("");

  return { result, onSearch, term, reset };
};

export default useFuse;
