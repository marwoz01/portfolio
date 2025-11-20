import { sedgwickAve } from "../fonts";

export default function AboutMePage() {
  return (
    <p className="fixed bottom-8 right-8 p-6 text-zinc-300 text-right w-100">
      I’m a passionate Web Developer focused on building{" "}
      <span className={sedgwickAve.className}>clean</span>,{" "}
      <span className={sedgwickAve.className}>responsive</span> interfaces and
      smooth user experiences. I enjoy combining technical precision with{" "}
      <span className={sedgwickAve.className}>creativity</span>, turning ideas
      into functional, visually appealing web projects. Currently, I’m
      developing my skills in React and exploring modern tools like Tailwind CSS, Next.js and Express.jsto create fast and dynamic websites.
    </p>
  );
}
