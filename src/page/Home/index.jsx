import { ChevronDown } from "lucide-react";
import "./home-style.scss";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero_main">
          <span>
            THE COUNTER: <p>70</p> Countries <p>1036</p> Cities
          </span>
          <h2>Leave your mark on all over the world</h2>
          <button>Read More</button>
          <div className="scroll">
            <p>Scroll Down to Continue</p>
            <button className="scroll_icon">
              <ChevronDown />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
