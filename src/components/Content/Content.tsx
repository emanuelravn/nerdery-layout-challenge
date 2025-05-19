import { Card } from "./card/Card";
import "./content.css";
import { RowCard } from "./row-card/RowCard";
import { SearchBar } from "./searchbar/SearchBar";

export const Content = () => {
  return (
    <div className="content-container">
      <SearchBar />
      <div className="title-container">
        <h2 className="first-title">Recently Used</h2>
        <div className="squares-container">
          <span className="title-square-1"> </span>
          <span className="title-square-2"> </span>
        </div>
      </div>
      <div className="card-container">
        <Card title="App Project" createdAt="20.02.2020" hasMore={false} dots={true}/>
        <Card title="Project: fitbit" createdAt="28.02.2020" hasMore={false} dots={true}/>
        <Card title="Client Documents" createdAt="4.03.2020" hasMore={true} dots={true} count="3"/>
      </div>
      <div className="second-title-container">
        <h2 className="second-title">Recent Files</h2>
        <button className="view-button">View All</button>
      </div>
      <div className="headers-container">
        <p className="name">Name</p>
        <p className="members">Members</p>
        <p className="last-mod">Last Modified</p>
      </div>
      <div className="row-card-container">
        <RowCard iconColor={"#FF9F00"} title={"Travel Landing Page"} members={"5 members"} lastModified={"Mar 8, 2020"} />
        <RowCard iconColor={"#4AC29D"} title={"True Photos"} members={"12 members"} lastModified={"Mar 8, 2020"} />
        <RowCard iconColor={"#FF6860"} title={"Dashboard Structure"} members={"10 members"} lastModified={"Mar 9, 2020"} />
        <RowCard iconColor={"#FF9F00"} title={"Character Illustration"} members={"3 members"} lastModified={"Mar 10, 2020"} />
      </div>
      <div className="second-title-container">
        <h2 className="second-title">Share with me</h2>
        <button className="view-button">View All</button>
      </div>
      <div className="card-container">
        <Card icon="../src/assets/rectangle.png" dots={false} circleBorderColor={["#4AC29D", "#FF6860"]} title="Landing Page" createdAt="20.02.2020" hasMore={false} width="157px" height="79px" margins={{marginTopHeader:"12px", marginTopBody:"-15px", marginTopDate:"-7px", marginLeftCircle: "40px"}}/>
        <Card icon="../src/assets/rectangle.png" dots={false} circleBorderColor={["#4AC29D", "#FF6860", "#FF9F00"]} title="Illustration Pack" createdAt="20.02.2020" hasMore={true} width="157px" height="79px" margins={{marginTopHeader:"12px", marginTopBody:"-15px", marginTopDate:"-7px", marginLeftCircle: "40px"}}/>
        <Card icon="../src/assets/rectangle.png" dots={false} circleBorderColor={["#4AC29D", "#FF9F00"]} title="CV Design" createdAt="20.02.2020" hasMore={false} width="157px" height="79px" margins={{marginTopHeader:"12px", marginTopBody:"-15px", marginTopDate:"-7px", marginLeftCircle: "40px"}}/>
      </div>
    </div>
  )
};
