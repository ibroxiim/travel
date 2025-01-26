import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import "./home-style.scss";
import girl from "../../assets/image/home/card/girl.jfif";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero_main">
          <span>
            THE COUNTER: <p>70</p> Countries <p>1036</p> Cities
          </span>
          <h2>Leave your mark on all over the world</h2>
          <button className="read_btn">Read More</button>
          <div className="scroll">
            <p>Scroll Down to Continue</p>
            <button className="scroll_icon">
              <ChevronDown strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>
      <section className="home_main">
        <div className="mini_cards">
          <div className="about_cards">
            <b>About Me</b>
            <img src={girl} alt="about image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in
              vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat
              eget et lorem est arcu. Gravida hendrerit sit blandit semper
              lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget
              suspendisse leo scelerisque sed d.
            </p>
            <button>Read More</button>
          </div>
          <div className="categ_card">
            <b>Categories</b>
            <ul>
              <li>
                <p>Europe</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Mountains</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Traveling Video</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Beauty of Seas</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Cuisine</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Guides for traveler</p>
                <p>(11)</p>
              </li>
              <li>
                <p>Other</p>
                <p>(11)</p>
              </li>
            </ul>
          </div>
          <div className="title_cards">
            <h3>Popular Post</h3>
          </div>
          <div className="status_cards">
            <p>September 17, 2018 - Tips & Tricks</p>
            <div className="status_info">
              <b>Finding Love & home in Tbilisi, Georgia</b>
              <div className="status_btn">
                <button>
                  <ChevronLeft strokeWidth={3} />
                </button>
                <button>
                  <ChevronRight strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
          <div className="title_cards">
            <h3>Recent Post</h3>
          </div>
          <div className="post_list">
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <p>September 17, 2018 - Tips & Tricks</p>
                <b>Finding Love & home in Tbilisi, Georgia</b>
              </div>
            </div>
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <p>September 17, 2018 - Tips & Tricks</p>
                <b>Finding Love & home in Tbilisi, Georgia</b>
              </div>
            </div>
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <p>September 17, 2018 - Tips & Tricks</p>
                <b>Finding Love & home in Tbilisi, Georgia</b>
              </div>
            </div>
          </div>
          <div className="faq_card">
            <b>Gear I Use</b>
            <b>What’s in My Bag??</b>
            <p>
              Unfortunately, there is no “one-size-fits-all” when it comes to
              travel packing lists.
            </p>
            <button>View Details</button>
          </div>
          <div className="title_cards">
            <h3>Product That I Have</h3>
          </div>
          <div className="post_list">
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <b>Apple MacBook Air MJV2ELL/A 13-inch Laptop </b>
                <p>$514</p>
              </div>
            </div>
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <b>Apple MacBook Air MJV2ELL/A 13-inch Laptop </b>
                <p>$514</p>
              </div>
            </div>
            <div className="list_item">
              <img src="https://picsum.photos/200" alt="post image" />
              <div className="post_info">
                <b>Apple MacBook Air MJV2ELL/A 13-inch Laptop </b>
                <p>$514</p>
              </div>
            </div>
          </div>
          <div className="title_cards">
            <h3>Get In Touch</h3>
          </div>
          <div className="social_btns">
            <button className="fcb">
              <i className="fa-brands fa-facebook-f"></i>
              <p>
                65.5K <br />
                Likes
              </p>
            </button>
            <button className="twt">
              <i className="fa-brands fa-twitter"></i>
              <p>
                105 k <br />
                Followers
              </p>
            </button>
            <button className="ytb">
              <i className="fa-brands fa-youtube"></i>
              <p>
                1.5 M <br />
                Subscribers
              </p>
            </button>
            <button className="inst">
              <i className="fa-brands fa-instagram"></i>
              <p>
                1.5 M <br />
                Subscribers
              </p>
            </button>
          </div>
        </div>
        <div className="big_cards"></div>
      </section>
    </>
  );
}
