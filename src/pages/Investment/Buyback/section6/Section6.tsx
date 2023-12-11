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
    body: "Choose your plan and amount",
  },
  {
    title: "Step 4",
    body: "Get your documents (Receipt, MOU, and post-dated cheque)",
  },
  {
    title: "Step 5",
    body: "Fill in your bio-data",
  },
  {
    title: "Step 6",
    body: "Get the latest updates on the developments",
  },
];
const Section6 = () => {
  return (
    <div className="section6">
      <div className="section6-container">
        <h2 className="section6-header">How It Works</h2>
        <div className="section6-item-container">
          {data.map((item) => (
            <div className="section6-item">
              <h3 className="section6-item-header">{item.title}</h3>
              <ul>
                <li className="section6-item-body">{item.body}</li>
              </ul>
            </div>
          ))}
        </div>
        <button className="about-section6-register">Register Now</button>
      </div>
    </div>
  );
};

export default Section6;
