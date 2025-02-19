interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r from-[#F4A836] to-[#E08E2B] text-transparent bg-clip-text hardware-accelerated ${className}`}>
      {children}
    </span>
  );
}; 