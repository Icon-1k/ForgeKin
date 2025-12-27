import React from 'react';

type CenterCardProps = {
  children?: React.ReactNode;
  /** Optional simple switch so the card can render different pre-built content */
  variant?: 'freelance' | 'employer' | string;
  /** Pre-built content for freelance variant (takes precedence when variant='freelance') */
  freelanceContent?: React.ReactNode;
  /** Pre-built content for employer variant (takes precedence when variant='employer') */
  employerContent?: React.ReactNode;
  maxWidth?: number | string;
  margin?: string;
  padding?: string;
  borderRadius?: number | string;
  boxShadow?: string;
  style?: React.CSSProperties;
};

export default function CenterCard({
  children,
  variant,
  freelanceContent,
  employerContent,
  maxWidth = 720,
  margin = '44px auto 0',
  padding = '38px 45px 42px',
  borderRadius = 9,
  boxShadow = '0 3px 8px rgba(0,0,0,0.04)',
  style,
}: CenterCardProps) {
  const baseStyle: React.CSSProperties = {
    maxWidth,
    margin,
    background: '#fff',
    borderRadius,
    padding,
    boxShadow,
    position: 'relative',
  };

  // Conditional rendering: if a variant is provided and corresponding
  // pre-built content was passed, render that. Otherwise render children.
  if (variant === 'freelance' && freelanceContent) {
    return <div style={{ ...baseStyle, ...style }}>{freelanceContent}</div>;
  }

  if (variant === 'employer' && employerContent) {
    return <div style={{ ...baseStyle, ...style }}>{employerContent}</div>;
  }

  return <div style={{ ...baseStyle, ...style }}>{children}</div>;
}
