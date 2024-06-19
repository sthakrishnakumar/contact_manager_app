const Contact = (args) => {
  const props = args.data;
  return (
    <>
      <div className="contact1">
        {props.name}
        <br />
        {props.phone}
        <br />
        {props.address}
        <br />
        <hr />
      </div>
    </>
  );
};

export default Contact;
