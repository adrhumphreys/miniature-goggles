import { FC } from "react";
import { Link } from "react-router-dom";
import NewNotebookButton from "./NewNotebookButton";

type Props = {
  navigation: any[];
  user: any;
};

const Sidebar: FC<Props> = ({ navigation, user }) => {
  return (
    <div className="flex w-20 flex-col">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-indigo-600">
        <div className="flex-1">
          <div className="flex items-center justify-center bg-indigo-700 py-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </div>
          <nav
            aria-label="Sidebar"
            className="flex flex-col items-center space-y-3 py-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-indigo-700"
              >
                <item.icon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
            <NewNotebookButton />
          </nav>
        </div>
        <div className="flex flex-shrink-0 pb-5">
          <a href="#" className="w-full flex-shrink-0">
            <img
              className="mx-auto block h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
            />
            <div className="sr-only">
              <p>{user.name}</p>
              <p>Account settings</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
