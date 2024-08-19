interface Props {
  title: string;
  onClick: () => void;
}

const MenuTitle = ({ onClick, title }: Props) => {
  return (
    <div
      onClick={onClick}
      className="my-4 ms-3 flex cursor-pointer items-center justify-start text-base font-bold text-gray hover:text-gray-dark"
    >
      {title}
    </div>
  );
};

export default MenuTitle;
