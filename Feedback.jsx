import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback)
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      alert("Feedback submitted successfully!");
      setFeedback({ name: "", email: "", message: "" });

    } catch (err) {
      console.error(err);
      alert("Error submitting feedback!");
    }
  };

  return (
    <div style={{ padding: "40px",margin:"50px" }}>
      <form onSubmit={handleSubmit}>
        <h2>Submit Feedback</h2>
         Name:<input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />
        <br /><br />

         Email:<input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />
        <br /><br />

         <textarea
          name="message"
          placeholder="Your Message"
          value={feedback.message}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
