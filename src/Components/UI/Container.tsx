type ContainerType = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerType) {
  return (
    <div
      className={`${className} w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
