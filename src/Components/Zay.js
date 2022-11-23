import { useEffect, useState } from "react";
import ZayBio from "./ZayBio";
import ZayJourney from "./ZayJourney";
import ZayContact from "./ZayContact";

export default function Zay() {
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
    <div className="Zay-Container">

<img className="personal-icon" src="./assets/Zaypic.png" alt="Zay"/>

      <div>
   </div>
      <div className="Zay-dropdown">
        <select className="form-select" value={details} onChange={handleOnChange}>
          <option value="SelectFellowDetails">Select Fellow Details</option>
          <option value="Bio">Bio</option>
          <option value="Journey">Journey</option>
          <option value="Contact">Contact</option>
        </select>
      </div>
      {bioVisible && <ZayBio />}
      {journeyVisible && <ZayJourney />}
      {contactVisible && <ZayContact />}
    </div>
  );
}
