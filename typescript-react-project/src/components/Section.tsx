import { ReactNode } from "react";

// * Old Code You May See
// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

// * Recommended Code & Default Values
type SectionProps = {
  title?: string;
  children: ReactNode;
};

// * The title prop is optional, so we can use default values
// * But, children is required, so we should pass something to it
const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
