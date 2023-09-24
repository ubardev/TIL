interface IProps {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: IProps) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-green-500 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-green-500 ${
              category === selected && "text-green-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
