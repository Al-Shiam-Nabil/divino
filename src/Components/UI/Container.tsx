type ContainerType = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerType) {
  return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
}
