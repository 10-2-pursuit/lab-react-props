import React from "react";

const Progress = (props) => {
  return (
    <div>
      <section className="progress">
      <h2>
        Raised <span className="secondary">{" $"}</span> of
        <span className="secondary">{" $" + props.targetNumber}</span>
      </h2>
    </section>
    </div>
  )
}

export default Progress
