import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface RetroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
  href?: string;
  onClick?: () => void;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  variant = 'primary',
  asChild = false,
  href,
  onClick,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = '',
  disabled = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-6 py-3
    border rounded-2xl font-medium
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden group
  `;

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--ink-2)',
          color: 'var(--paper)',
          borderColor: 'var(--grid)'
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--ink-2)',
          color: 'var(--paper)',
          borderColor: 'var(--grid)'
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--ink)',
          borderColor: 'var(--grid)'
        };
      default:
        return {};
    }
  };

  const buttonClasses = `${baseClasses} ${className}`;
  const variantStyles = getVariantStyles(variant);

  const content = (
    <>
      {IconLeft && <IconLeft className="w-4 h-4" />}
      <span className="relative z-10">{children}</span>
      {IconRight && <IconRight className="w-4 h-4" />}
    </>
  );

  if (asChild && href) {
    return (
      <Link href={href} className={buttonClasses} style={variantStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses} style={variantStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      style={variantStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default RetroButton;
