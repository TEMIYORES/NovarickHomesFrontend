import Container from "../../components/Container";
import "./blog.scss";
import house from "./house.jpg";
const itemData = [
  {
    img: house,
    title: "Finding Simplicity in Life",
    content:
      "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though...",
    date: "May 2, 2023",
    author: "Olivia Megan",
  },
  {
    img: house,
    title: "Finding Simplicity in Life",
    content:
      "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though...",
    date: "May 2, 2023",
    author: "Olivia Megan",
  },
  {
    img: house,
    title: "Finding Simplicity in Life",
    content:
      "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though...",
    date: "May 2, 2023",
    author: "Olivia Megan",
  },
  {
    img: house,
    title: "Finding Simplicity in Life",
    content:
      "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though...",
    date: "May 2, 2023",
    author: "Olivia Megan",
  },
];
const Blog = () => {
  return (
    <Container>
      <div className="blog">
        <div className="blog-container">
          <div className="main-blog">
            <h4 className="recent-blog-header">Recent Blogs</h4>
            <div className="main-post-container">
              <img src={house} alt="a house" className="blog-house" />
              <p className="date">Olivia Megan | May 2, 2023</p>
              <h2>Finding Simplicity in Life</h2>
              <p>
                Life can get complicated really quickly, but it doesn't have to
                be! There are many ways to simplify your life, a few of which
                we've explored in the past. This week we're taking a bit of a
                approach though, in how you can find simplicity in the life you
                already living.
              </p>
              <a href="#" className="continue-reading">
                continue reading
              </a>
            </div>
          </div>
          <div className="side-blog">
            {itemData.map((item) => (
              <div className="side-post-container">
                <img src={house} alt="a house" className="blog-house" />
                <div className="side-post-content">
                  <p className="date">
                    {item.author} | {item.date}
                  </p>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <a href="#" className="continue-reading">
                    continue reading
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="all-blog">
          <h4 className="all-blog-header">All Blogs</h4>
          <div className="all-blog-content">
            {itemData.map((item) => (
              <div className="all-blog-container">
                <img src={house} alt="a house" className="blog-house" />
                <div className="all-blog-content">
                  <p className="date">
                    {item.author} | {item.date}
                  </p>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <a href="#" className="continue-reading">
                    continue reading
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
