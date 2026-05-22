export type FlooringIconName =
  | "calculator"
  | "guide"
  | "ruler"
  | "waste"
  | "stairs"
  | "carpet"
  | "pattern"
  | "transition"
  | "shield"
  | "layers";

type FlooringIconProps = {
  name: FlooringIconName;
  className?: string;
};

const iconClass = "h-5 w-5";

export function FlooringIcon({ name, className = iconClass }: FlooringIconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true
  };

  switch (name) {
    case "calculator":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0" />
        </svg>
      );
    case "guide":
      return (
        <svg {...common}>
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
          <path d="M5 5.5v16M9 7h6M9 11h6" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...common}>
          <path d="M4 17 17 4l3 3L7 20z" />
          <path d="m14 7 3 3M11 10l2 2M8 13l3 3" />
        </svg>
      );
    case "waste":
      return (
        <svg {...common}>
          <path d="M4 19h16M7 16l6-11 4 7" />
          <path d="m7 16 5-4 5 4" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...common}>
          <path d="M4 19h5v-5h5V9h6" />
          <path d="M4 19h16" />
        </svg>
      );
    case "carpet":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 6v12M12 6v12M16 6v12" />
        </svg>
      );
    case "pattern":
      return (
        <svg {...common}>
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
          <path d="M7.5 4v7M16.5 13v7" />
        </svg>
      );
    case "transition":
      return (
        <svg {...common}>
          <path d="M4 8h10M10 4l4 4-4 4M20 16H10M14 12l-4 4 4 4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
        </svg>
      );
  }
}
