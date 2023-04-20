import LocationInfo from "./LocationInfo";
import ResidentCard from "./ResidentCard";
import "./styles/mainContent.css";

const MainContent = ({ location, data }) => {
  return (
    <>
      <LocationInfo location={location} />
      <div className="resident-container">
        {data?.residents?.map((url) => (
          <ResidentCard key={url} url={url} />
        ))}
      </div>
    </>
  );
};

export default MainContent;
