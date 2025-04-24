export interface CardData {
  name: string;
  title: string;
  description?: string;
  photo: string;
  backgroundType: "solid" | "gradient" | "bubbless";
  backgroundColor: string;
  badges: string[];
  socialLinks: string[];
}

export const LANG_COLORS: Record<string, string> = {
  HTML: "#e34c26",
  CSS: "#264de4",
  Javascript: "#f0db4f",
  Typescript: "#3178c6",
  Python: "#306998",
  PHP: "#8993be",
  Laravel: "#ff2d20"
};
