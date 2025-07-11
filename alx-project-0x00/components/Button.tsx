import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
