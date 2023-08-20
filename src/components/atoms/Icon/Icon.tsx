import Image from "next/image";

export type IconStyleProps = {
  $size: number;
  $cursor_pointer?: boolean;
};

export type IconProps = IconStyleProps & {
  icon: {
    src: string;
    alt: string;
  };
  priority?: boolean;
};

const Icon = ({ icon, priority = true, ...props }: IconProps) => {
  const { $size, $cursor_pointer } = props;
  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={$size}
      height={$size}
      style={{ cursor: $cursor_pointer ? "pointer" : "auto" }}
      priority={priority}
    />
  );
};

export default Icon;
