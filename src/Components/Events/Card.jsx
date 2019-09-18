import React from 'react';


class Card extends React.Component {
  events = [
    {
      nameEvent: "Evento 1",
      date: new Date().toISOString(),
      desc: "Esta es la Descripcion del evento 1",
    },
    {
      nameEvent: "Evento 2",
      date: new Date().toISOString(),
      desc: "Esta es la Descripcion del evento 2",
    },
    {
      nameEvent: "Evento 3",
      date: new Date().toISOString(),
      desc: "Esta es la Descripcion del evento 3",
    },
    {
      nameEvent: "Evento 4",
      date: new Date().toISOString(),
      desc: "Esta es la Descripcion del evento 4",
    }
  ];
  
  renderEvents = () => {
    this.events.map(event => {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-body">
                  {event.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.renderEvents()}
      </div> 
    );
  }
}

export default Card;