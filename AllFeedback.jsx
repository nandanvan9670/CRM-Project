import { useEffect, useState } from "react";


const AllFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error("Error loading feedbacks", err);
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Feedback</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {feedbacks.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.name}</td>
              <td>{f.email}</td>
              <td>{f.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllFeedback;
