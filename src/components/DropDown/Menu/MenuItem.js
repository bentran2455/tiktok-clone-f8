import Button from "../../Button";
function MenuItems({ data, onClick }) {
  return (
    <Button leftIcon={data.icon} onClick={onClick} select>
      {data.title}
    </Button>
  );
}

export default MenuItems;
