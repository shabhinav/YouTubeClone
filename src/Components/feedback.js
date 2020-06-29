import React, { useRef, useState } from "react";
import "./feedback.scss";
import axios from "axios";

const Feedback = (props) => {
  const feedbacks = useRef();

  const [state, setstate] = useState("");

  const onSubmit = async () => {
    try {
      let feedback = feedbacks.current.value;
      let myfeedback = JSON.stringify(feedback);
      let feedbackdetail = axios.post(
        `https://clone-1d9c2.firebaseio.com/feedback.json`,
        myfeedback
      );
      console.log(feedbackdetail);
      props.history.push("/");
    } catch (err) {
      setstate(err.response.data.error.message);
    }
  };

  return (
    <div className="Feedback">
      <div className="Form">
        <h6
          style={{ color: "white", backgroundColor: "#546E7A", padding: "15px 0px" }}
        >
          <strong>Send FeedBack</strong>
        </h6>
        <div className="container">
          <textarea
            className="textarea"
            ref={feedbacks}
            placeholder="Have feeadback?We love to hear it,but please share Sensative Information.Have Questions?Try Help or Support"
          ></textarea>
          <hr />
          <p style={{ fontSize: "12px", paddingTop: "15px" }}>
            Go to the <a href="/">Legal Help page</a> to request content changes for
            legal reasons. Some account and system information may be sent to Google.
            We will use the information you give us to help address technical issues
            and to improve our services, subject to our{" "}
            <a href="/">Privacy Policy</a> and <a href="/">Terms of Service</a>.
          </p>
          <hr />
          <p>{state}</p>
          <div style={{ textAlign: "right" }}>
            <button
              className="btn btn-light"
              style={{ color: "blue", marginRight: "5px" }}
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              className="btn btn-light"
              onClick={() => props.history.push("/")}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
