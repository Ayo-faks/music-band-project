import React, { Component } from "react";
import "./Work.css";
import Gallery from "../../components/Gallery/Gallery";

export default class Work extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-top">
          <h1>Materiale video</h1>
        </div>
        <div className="work-middle">
          <div className="work-content">
            <p>
              "Natura voiește ca omul să-și cânte plăcerile și suferințele. Prin
              cântecele sale, el își zugrăvește gândul, năravurile, faptele,
              într-un cuvânt toată ființa sa; cântecul este o răsfrângere a
              sufletului său." - Muzica e cel mai bun mijloc de a ne exprima
              sentimentele și trăirile cu sau fară cuvinte. Dorim ca prin
              melodiile noastre să putem ajunge la inima dumneavoastră și să ne
              bucurăm împreună de frumusețea cântecului popular.
            </p>
          </div>
          <div className="best-clip">
            <iframe
              title="clip"
              src="https://www.youtube.com/embed/1MMbFMcBSDI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className="work-bottom">
          <Gallery />
        </div>
      </div>
    );
  }
}
