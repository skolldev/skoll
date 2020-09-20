import classNames from "classnames";

type Props = {
  timespan: string;
  cards: CardDetails[];
};

export interface CardDetails {
  title: string;
  increased: boolean;
  currentNumber: string;
  previousNumber: string;
  percentageChange: number;
}

export const Cards = ({ timespan, cards }: Props) => {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {timespan}
      </h3>
      <div className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3">
        {cards.map(
          (
            {
              title,
              increased,
              currentNumber,
              previousNumber,
              percentageChange
            },
            i
          ) => {
            return (
              <div
                key={title}
                className={
                  i === 0
                    ? "border-t border-gray-200 md:border-0 md:border-l"
                    : ""
                }
              >
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-base leading-6 font-normal text-gray-900">
                      {title}
                    </dt>
                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                      <div className="flex items-baseline text-2xl leading-8 font-semibold text-indigo-600">
                        {currentNumber}
                        <span className="ml-2 text-sm leading-5 font-medium text-gray-500">
                          von {previousNumber}
                        </span>
                      </div>
                      <div
                        className={classNames(
                          "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 md:mt-2 lg:mt-0",
                          {
                            "bg-green-100 text-green-800": increased,
                            "bg-red-100 text-red-800": !increased
                          }
                        )}
                      >
                        {increased ? increaseIcon : decreaseIcon}
                        <span className="sr-only">
                          {increased ? "increased" : "decreased"} by
                        </span>
                        {percentageChange} %
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

const increaseIcon = (
  <svg
    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const decreaseIcon = (
  <svg
    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
