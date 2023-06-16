import React from "react";

import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
const {interviewers, interviewer, setInterviewer} = props;

const interviewersItems = interviewers.map((interviewerObj) => (
  <InterviewerListItem
    id={interviewerObj.id}
    name={interviewerObj.name}
    avatar={interviewerObj.avatar}
    selected={interviewerObj.id === interviewer}
    setInterviewer={setInterviewer}
  />
));

return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewers</h4>
    <ul className="interviewers__list">{interviewersItems}</ul> 
  </section>
)
}

