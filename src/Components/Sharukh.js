import { useEffect, useState } from "react";
import SharukhBio from "./SharukhBio";
import SharukhJourney from "./SharukhJourney";
import SharukhContact from "./SharukhContact.js";

export default function Sharukh() {
  const [details, setDetails] = useState("SelectFellowDetails");

  const [bioVisible, setbioVisible] = useState(false);
  const [journeyVisible, setjourneyVisible] = useState(false);
  const [contactVisible, setcontactVisible] = useState(false);

  useEffect(() => {
    details === "Bio"
      ? setbioVisible(true)
      : setbioVisible(false);
      details === "Journey" ? setjourneyVisible(true) : setjourneyVisible(false);
      details === "Contact" ? setcontactVisible(true) : setcontactVisible(false);
  }, [details]);

  const handleOnChange = (e) => {
    setDetails(e.target.value);
  };


  return (
    <div className="Sharukh-Container">
<img className="personal-icon" src="./assets/Sharukhpic.png" alt="Sharukh"/>


      <div>
      <p>hi</p>
        <h1></h1>
      </div>
      <div className="Sharukh-dropdown">
        <select className="form-select" value={details} onChange={handleOnChange}>
          <option value="SelectFellowDetails">Select Fellow Details</option>
          <option value="Bio">Bio</option>
          <option value="Journey">Journey</option>
          <option value="Contact">Contact</option>
        </select>
      </div>
      {bioVisible && <SharukhBio />}
      {journeyVisible && <SharukhJourney />}
      {contactVisible && <SharukhContact />}
    </div>
  );
}
