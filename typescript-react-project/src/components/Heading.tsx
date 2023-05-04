import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};

// * Only when you return an single element, the return type can be ReactElement
// * Otherwise, TS infer the return type to be JSX.Element
const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
