import { FC, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type Props = {
  onSearch: (value: string) => void;
  value: string;
};

const Search: FC<Props> = ({ onSearch, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useHotkeys("ctrl+k, cmd+k", () => inputRef?.current?.focus());

  return (
    <div>
      <label
        htmlFor="search"
        className="sr-only block text-sm font-medium text-gray-700"
      >
        Quick search
      </label>
      <div className="relative mt-1 flex items-center">
        <input
          ref={inputRef}
          type="text"
          name="search"
          id="search"
          onChange={(e) => onSearch(e.target.value)}
          value={value}
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Search;
