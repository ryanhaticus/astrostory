interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl">
        {subtitle}
      </p>
    </>
  );
};

export default Header;
