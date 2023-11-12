import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

const Error: React.FC = () => {
  return (
    <div className="mt-4 rounded-md bg-gray-800 border border-yellow-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-gray-300">Sorry!</h3>
          <div className="mt-2 text-sm text-gray-300">
            <p>
              OpenAI is likely experiencing an outage. Please try generating a
              story again in 5-10 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
