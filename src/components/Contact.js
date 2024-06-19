const Contact = (props) => {
  return (
    <>
      <div className="contact1">
        {props.name}
        <br />
        {props.phone}
        <br />
        {props.address}
        <br />
        <br />
      </div>
    </>
  );
};

export default Contact;
