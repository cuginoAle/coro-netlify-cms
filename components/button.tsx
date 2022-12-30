interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-accent text-white p-2 rounded-md"
    >
      {props.children}
    </button>
  );
};

export { Button };
