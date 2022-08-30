import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/vivek.jpg"
          alt="An Image Showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Vivek</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        ReactJs and NextJs
      </p>
    </section>
  );
}
