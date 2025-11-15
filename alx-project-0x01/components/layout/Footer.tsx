const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-auto">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Daily Contents</p>
    </footer>
  );
};

export default Footer;