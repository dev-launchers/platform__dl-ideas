import React, { useState } from "react";
import axios from "axios";
import "./submitIdea.css";
import { Link } from "react-router-dom";

import { env } from "../../utils/EnvironmentVariables";

import {
  Wrapper,
  Headline,
  Question,
  Question2,
  Submit,
  Container,
  SubmitWrapper,
  Description,
  DevIdeasDescription,
} from "./styledSubmitIdea";

function SubmitIdeaForm() {
  const [selected, setSelected] = useState("form");
  const [sending, setSending] = useState(false);

  const [ideaId, setIdeaId] = useState("");
  const [ideaName, setIdeaName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [hourCommitmentMin, setHourCommitmentMin] = useState(0);
  const [hourCommitmentMax, setHourCommitmentMax] = useState(0);
  const [skills, setSkills] = useState([
    { skill: "Web Developer" },
    { skill: "AI / ML" },
  ]);
  const [openPositions, setOpenPositions] = useState([
    {
      title: "Developer, UX/UX",
      description: "Lots of programing",
      isHidden: false,
    },
  ]);
  const [author, setAuthor] = useState("1");
  const [difficultyLevel, setDifficultyLevel] = useState("Beginner");
  const [discord, setDiscord] = useState("");
  const [email, setEmail] = useState("");
  const [calendly, setCalendly] = useState("");
  const [features, setFeatures] = useState("");
  const [experience, setExperience] = useState("");
  //const [timeStamp, setTimeStamp] = useState(new Date());

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    // i don't think we need the date stuff?
    // get request of test posts still have a date
    // let currentTime =  new Date().toLocaleDateString('en-US');
    // this.setState({timeStamp: currentTime});

    var state = {
      ideaName: ideaName,
      tagline: tagline,
      description: description,
      targetAudience: targetAudience,
      hourCommitmentMin: hourCommitmentMin,
      hourCommitmentMax: hourCommitmentMax,
      skills: skills,
      openPositions: openPositions,
      author: author,
      difficultyLevel: difficultyLevel,
      discord: discord,
      email: email,
      calendly: calendly,
      features: features,
      experience: experience,
    };

    const res = await axios.post(`${env().STRAPI_URL}/idea-cards/`, state);

    if (res.status === 200) {
      setIdeaId(res.data.id);
      setIdeaName("");
      setTargetAudience("");
      setDescription("");
      setTagline("");
      setSelected("submited");
      setDiscord("");
      setEmail("");
      setCalendly("");
      setFeatures("");
      setExperience("");
      setSending(false);
    } else {
      alert("Unable to register your idea.");
      setSending(false);
    }
  };

  // const handleClick = (e, n) => {
  // setHourCommitmentMax(e);
  //   setSelected(n)
  // }

  if (selected === "form") {
    return (
      <Wrapper>
        <Container>
          <Headline>Dev Ideas</Headline>
          <DevIdeasDescription>
            Have an idea for a development project?
            <br />
            Share your idea with us!
            <br />
          </DevIdeasDescription>
          <form onSubmit={submitHandler}>
            {/* <div className="test">
              <div className="progress_bar">
                <div className="circule"><div className="completed"></div><p>Idea Form</p></div>
                <div className="circule"><div className=""></div><p>Review</p></div>
                <div className="circule"><div className=""></div><p>Workshopping</p></div>
                <div className="circule"><div className=""></div><p>Recruitment</p></div>
                <div className="circule"><div className=""></div><p>Project</p></div>
              </div>
            </div> */}
            <Question>
              <div>
                <label for="ideaName">Idea Name</label>
              </div>
              <input
                required
                type="text"
                id="ideaName"
                name="ideaName"
                value={ideaName}
                onChange={(e) => setIdeaName(e.target.value)}
              />
            </Question>
            <Question>
              <div>
                <label for="discord">Discord</label>
              </div>
              <input
                required
                type="text"
                id="discord"
                name="discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </Question>
            <Question>
              <div>
                <label for="email">Your Email</label>
              </div>
              <input
                required
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Question>
            <Question>
              <div>
                <label for="calendly">
                  Do you have a Calendly? If so add a link here, if not it’s
                  okay!
                </label>
              </div>
              <input
                type="text"
                id="calendly"
                name="calendly"
                value={calendly}
                onChange={(e) => setCalendly(e.target.value)}
              />
            </Question>
            <Question2>
              <div>
                <label for="experience">
                  What is your experience with development?
                </label>
              </div>
              <textarea
                required
                id="experience"
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </Question2>
            <Question2>
              <div>
                <label for="description">What is your idea?</label>
              </div>
              <textarea
                required
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Question2>
            <Question2>
              <div>
                <label for="targetAudience">
                  Why do you think your idea is helpful or would be fun?
                </label>
              </div>
              <textarea
                required
                id="targetAudience"
                name="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
            </Question2>
            <Question2>
              <div>
                <label for="features">
                  What features would your idea have?
                </label>
              </div>
              <textarea
                required
                id="features"
                name="features"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              />
            </Question2>
            <Question2>
              <div>
                <label for="tagline">
                  Anything else you want to share with us?
                </label>
              </div>
              <textarea
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </Question2>
            <p className="text">
              After submitting your idea will be reviewed and enter the
              workshopping stage !
            </p>
            <Submit type="submit">
              {" "}
              {sending === true ? "Wait" : "Submit"}{" "}
            </Submit>
          </form>
        </Container>
      </Wrapper>
    );
  }

  if (selected === "submited") {
    return (
      <Wrapper>
        <SubmitWrapper>
          <p>
            Thank you for submitting your idea! Next your idea will move on to
            the workshopping phase.{" "}
          </p>
          <Link to={`/workshopping/${ideaId}`}>
            <button>Next</button>
          </Link>
        </SubmitWrapper>
      </Wrapper>
    );
  }
}

export default SubmitIdeaForm;
