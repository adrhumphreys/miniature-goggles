import { ExclamationCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { FC, InputHTMLAttributes, RefObject } from "react";

type Props = {
  label?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement> & {
    ref: RefObject<HTMLInputElement>;
  };
  error?: boolean;
  errorMessage?: string;
};

const Input: FC<Props> = ({ error, errorMessage, label, inputProps }) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={inputProps?.id ?? ""}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          className={classNames(
            "block w-full rounded-md shadow-sm sm:text-sm",
            {
              "border-gray-300  focus:border-indigo-500 focus:ring-indigo-500":
                !error,

              "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500":
                error,
            }
          )}
          {...inputProps}
          aria-invalid={error}
        />
        {error ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;
