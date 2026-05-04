interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Filter({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterProps) {
  return (
    <div className="flex gap-2 my-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`btn btn-sm ${
            selectedCategory === category ? "btn-primary" : "btn-outline"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}