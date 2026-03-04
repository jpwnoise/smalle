declare module "react-text-glitch" {
  import { FC } from "react";

  export interface GlitchTextProps {
    text: string;
    glitchTimeSpan?: number;
    strength?: number;
    className?: string;
  }

  export const GlitchText: FC<GlitchTextProps>;
}