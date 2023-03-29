import "./Dashboard.css";
import {
  FaUser,
  FaCreditCard,
  FaEdit,
  FaGripLines,
  FaTasks,
  FaWallet,
  FaAddressCard,
  FaHome,
} from "react-icons/fa";
import { AiFillLock, AiTwotoneBank } from "react-icons/ai";
import FaqAccordion from "../../layout/elements/Accordion/accordion";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ProfileNavItem = ({
  name,
  icon,
  toggleId,
  setToggleId,
  accordionId,
  links,
}) => {
  const title = (
    <div className="profile-nav-item-title">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
  return (
    <FaqAccordion
      accordionId={accordionId}
      setToggleId={setToggleId}
      toggleId={toggleId}
      title={title}
    >
      {links && (
        <div className="profile-nav-nested-links">
          {links.map((linkobj, index) => {
            return (
              <Link to={linkobj.link} key={index}>
                <span>{linkobj.icon}</span>
                <span>{linkobj.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </FaqAccordion>
  );
};

const Dashboard = () => {
  const [toggleId, setToggleId] = useState("");
  return (
    <div className="dashboard">
      <div className="profile-upper-sectiion">
        <div className="profile-top">
          <div className="profile-img">
            <FaUser />
          </div>
          <div className="profile-actions">
            <div className="profile-action">
              <FaCreditCard />
            </div>
            <div className="profile-action">
              <FaEdit />
            </div>
            <div className="profile-action">
              <FaGripLines />
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-details">
            <div className="profile-details-fields">
              <span className="field">Nickname</span>
              <span className="field">Mobile</span>
              <span className="field">Available balance</span>
            </div>
            <div className="profile-details-values">
              <span className="Value">91+ 7293930201</span>
              <span className="Value">James Bond</span>
              <span className="Value">$88</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-navigation-section">
        <ProfileNavItem
          name={"Orders"}
          icon={<FaTasks />}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Acc1"
        />

        <ProfileNavItem
          name={"Wallet"}
          icon={<FaWallet />}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Acc2"
          links={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Win", link: "/win", icon: <FaHome /> },
          ]}
        />
        <ProfileNavItem
          name={"Bank Card"}
          icon={<AiTwotoneBank />}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Acc3"
          links={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Win", link: "/win", icon: <FaHome /> },
          ]}
        />
        <ProfileNavItem
          name={"Address"}
          icon={<FaAddressCard />}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Acc4"
        />
        <ProfileNavItem
          name={"Account Security"}
          icon={<AiFillLock />}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Acc5"
          links={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Win", link: "/win", icon: <FaHome /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
