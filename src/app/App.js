import Contact from "../components/Contact";
const App = () => {
  return (
    <>
      <div className="container">
        <h3>Contact List :</h3>
        <Contact name="Ram" phone="9812345678" address="Ayodhya" />
        <Contact name="Hari" phone="9812345679" address="Vaikunth" />
        <Contact name="Balram" phone="9812345670" address="Dwarika" />
      </div>
    </>
  );
};

export default App;
