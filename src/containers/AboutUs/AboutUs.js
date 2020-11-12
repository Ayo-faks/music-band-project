import React, { Component } from "react";
import "./AboutUs.css";
import members from "../../content/members";
import TeamMember from "../../components/TeamMember/TeamMember";
export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="about-top">
          <h1>Despre noi</h1>
        </div>
        <div className="about-middle">
          <h1>Tinerețe și profesionalism</h1>
          <p>
            Am reușit să aducem împreună în această fanfara atat experiența cat
            și tinerețea și dorința de afirmare a unor colegi care sunt la
            început de drum, acest lucru fiind un factor cheie în echipa nostră.
            Dorința de a face lumea fericită prin prestația lor și bucuria pe
            care o arată fiecare persoană din această echipă la fiecare
            eveniment ar trebui să fie motivele pentru care să apelați cu
            încredere pentru viitoare evenimente. Suntem pregătiți să dovedim cu
            fiecare ocazie că decizia de a ne alege, este una pe care nu o veți
            regreta. Astepăm cu drag oportunitatea de a vă aduce bucurie prin
            prestațiile noastre.
          </p>
        </div>
        <div className="about-bottom">
          <div className="wrapper">
            <h1>Echipa Noastră</h1>
            <div className="team">
              {members.map((item, index) => {
                return (
                  <TeamMember
                    name={item.name}
                    category={item.category}
                    img={item.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
