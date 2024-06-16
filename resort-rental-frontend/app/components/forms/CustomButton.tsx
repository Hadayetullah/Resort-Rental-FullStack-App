/* FIRST WAY */
// import React from "react";

// type Props = { label: string; onClick: () => void; className?: string };

// const CustomButton = (props: Props) => {
//   return (
//     <div
//       onClick={props.onClick}
//       className={`py-4 bg-primary hover:bg-secondary text-white text-center rounded-xl cursor-pointer ${props.className}`}
//     >
//       {props.label}
//     </div>
//   );
// };

// export default CustomButton;

/* SECOND WAY */
interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`py-4 bg-primary hover:bg-secondary text-white text-center rounded-xl cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
