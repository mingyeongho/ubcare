import Image from "next/image";

interface Props {
  icon: {
    src: string;
    alt: string;
  };
  size: number;
  cursorPointer?: boolean;
  priority?: boolean;
}

const Icon = ({ icon, size, cursorPointer = true, priority = true }: Props) => {
  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={size}
      height={size}
      style={{ cursor: cursorPointer ? "pointer" : "auto" }}
      priority={priority}
    />
  );
};

export default Icon;
