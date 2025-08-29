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
  prefetch?: boolean;
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
  prefetch = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-6 py-3
    border rounded-2xl font-medium
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden group
  `;

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-theme-secondary text-paper border-theme hover:bg-opacity-90';
      case 'secondary':
        return 'bg-theme-secondary text-paper border-theme hover:bg-opacity-90';
      case 'ghost':
        return 'bg-transparent text-primary border-theme hover:bg-theme-secondary hover:text-primary';
      default:
        return '';
    }
  };

  const buttonClasses = `${baseClasses} ${getVariantClasses(variant)} ${className}`;

  const content = (
    <>
      {IconLeft && <IconLeft className="w-4 h-4" />}
      <span className="relative z-10">{children}</span>
      {IconRight && <IconRight className="w-4 h-4" />}
    </>
  );

  if (asChild && href) {
    return (
      <Link href={href} className={buttonClasses} prefetch={prefetch}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses} prefetch={prefetch}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default RetroButton;
