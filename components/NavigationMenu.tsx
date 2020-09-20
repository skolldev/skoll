import classNames from "classnames";
import Link from "next/link";

type Props = {
  isMobile: boolean;
};

interface Route {
  label: string;
  href: string;
  icon?: JSX.Element;
}

const routes: Route[] = [
  {
    label: "Dashboard",
    href: "/"
  },
  {
    label: "Steps",
    href: "/steps"
  },
  {
    label: "Weight",
    href: "/"
  },
  {
    label: "Calories",
    href: "/"
  }
];

export const NavigationMenu = (props: Props) => {
  return (
    <nav
      className={classNames("mt-5 px-2 space-y-1`", {
        "flex-1 bg-white": !props.isMobile
      })}
    >
      {routes.map(({ href, label, icon }) => {
        return (
          <Link href={href} key={href}>
            <a className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
              {icon} {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
