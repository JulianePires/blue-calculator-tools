const Button = {
  baseStyle: {
    fontFamily: "Noto Sans",
    fontWeight: "500",
    h: "10",
    borderRadius: "md",
  },
  sizes: {
    icon: {
      h: "8",
      w: "8",
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "brand.500",
      color: "brand.500",
      _hover: {
        color: "brand.600",
        borderColor: "brand.600",
      },
    },
    solid: {
      bg: "brand.500",
      color: "white",
      _hover: {
        bg: "brand.600",
      },
    },
    contrast: {
      bg: "brand.100",
      color: "brand.500",
      _hover: {
        bg: "brand.200",
        color: "brand.600",
      },
    },
    backButton: {
      bg: "white",
      color: "brand.300",
      _hover: {
        bg: "brand.100",
      },
    },
    unestyled: {
      bg: "transparent",
      color: "brand.500",
      fontWeight: "500",
      _hover: {
        color: "brand.600",
      },
    },
    ghost: {
      bg: "brand.50",
      color: "brand.300",
      _hover: {
        bg: "brand.100",
        color: "brand.500",
      },
    },
    icon: {
      bg: "brand.100",
      color: "brand.300",
      _hover: {
        bg: "brand.200",
        color: "brand.500",
      },
    },
    nav: {
      color: "brand.200",
      bg: "transparent",
      _hover: {
        bg: "brand.100",
        borderRadius: "200px",
        color: "brand.300",
      },
      _active: {
        color: "brand.300",
      },
    },
    select: {
      border: "1.4px solid",
      borderRadius: "4px",
      bgColor: "white",
      borderColor: "brand.200",
      textAlign: "left",
      color: "brand.200",
      overflow: "clip",
      _hover: {
        color: "brand.600",
        borderColor: "brand.600",
      },
    },
  },
};

export default Button;
