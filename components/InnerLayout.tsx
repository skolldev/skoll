type Props = {
  children: any;
  pageTitle: string;
};

export const InnerLayout = ({ children, pageTitle }: Props) => (
  <div className="pt-2 pb-6 md:py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="py-4">{children}</div>
    </div>
  </div>
);
