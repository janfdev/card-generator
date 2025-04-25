export type TechStack = "Python" | "Javascript" | "Typescript" | "Laravel";
export type SocialMedia = "Linkedin" | "Instagram" | "Github";

export interface CardData {
  name: string;
  jobTitle: string;
  description: string;
  avatarUrl: string;
  techStack: TechStack[];
  socialMedia: SocialMedia[];
}
