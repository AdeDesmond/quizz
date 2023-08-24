function Footer() {
  const date = new Date().getDate();
  return (
    <div>
      <p className="date">❤️‍🔥All love from Desmond™ @{date.toLocaleString()}</p>
    </div>
  );
}

export default Footer;
