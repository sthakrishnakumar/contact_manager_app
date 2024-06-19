import Contact from "../components/Contact";
const App = () => {
  const contacts = [
    { name: "Ram", phone: "9812345677", address: "Ayodhya" },
    { name: "Hari", phone: "9812345678", address: "Vaikunth" },
    { name: "Balram", phone: "9812345679", address: "Dwarika" },
  ];
  return (
    <>
      <div className="container">
        <h3>Contact List :</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};

export default App;
