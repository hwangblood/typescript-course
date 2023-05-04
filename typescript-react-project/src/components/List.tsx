import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  itemRender: (item: T) => ReactNode;
}

const List = <T,>({ items, itemRender }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{itemRender(item)}</li>
      ))}
    </ul>
  );
};

export default List;
