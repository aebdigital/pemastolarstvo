import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-accent text-white hover:bg-accent/90',
  outline: 'border-2 border-dark text-dark hover:bg-dark hover:text-white',
  gold: 'bg-gold text-dark hover:bg-dark hover:text-white',
  dark: 'bg-dark text-white hover:bg-gold hover:text-dark',
};

const sizes = {
  sm: 'px-5 py-2.5 text-[10px]',
  md: 'px-8 py-4 text-[11px]',
  lg: 'px-12 py-6 text-[13px]',
};

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-2xl font-black uppercase tracking-[0.2em] transition-premium shadow-sm hover:shadow-lg active:scale-95';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
    } ${className}`;

  if (href) {
    if (href.startsWith('http') || href.endsWith('.pdf')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
