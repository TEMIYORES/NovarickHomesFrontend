import "./section6.scss";
const data = [
  {
    title: "Step 1",
    body: "Read the FAQ carefully",
  },
  {
    title: "Step 2",
    body: "Fill in your bio-data",
  },

  {
    title: "Step 3",
    body: "Choose date to inspect the property.",
  },
  {
    title: "Step 4",
    body: "Make payment",
  },
  {
    title: "Step 5",
    body: "Get your documents.",
  },
  {
    title: "Step 6",
    body: "Get the latest updates on the developments",
  },
];
const Section6 = () => {
  return (
    <div className="co_ownership-section6">
      <div className="co_ownership-section6-container">
        <h2 className="co_ownership-section6-header">How It Works</h2>
        <div className="co_ownership-section6-item-container">
          {data.map((item) => (
            <div className="co_ownership-section6-item">
              <h3 className="co_ownership-section6-item-header">
                {item.title}
              </h3>
              <ul>
                <li className="co_ownership-section6-item-body">{item.body}</li>
              </ul>
            </div>
          ))}
        </div>
        <a className="about-co_ownership-section6-register" href="#co_ownership_form">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Section6;
