const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <p>Copyright {year} Edgemony</p>
    </footer>
  );
};

export { Footer };
