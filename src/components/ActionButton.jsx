export default function ActionButton({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const baseClass =
    'flex items-center justify-center transition-opacity';

  const variants = {
    primary:
      'w-full max-w-[335px] min-h-[45px] rounded-[6px] bg-[#00C9A7] py-[12px] px-4 sm:px-[24px] hover:opacity-90',

    secondary:
      'w-full sm:w-[165px] min-h-[45px] rounded-[6px] border border-[#2A3A4A] border-t-[#2A3A4A] py-[11px] px-[22px] hover:bg-[#00C9A7]/10 transition-colors',

    nav:
      'shrink-0 min-w-[106px] h-[36px] py-[8px] px-[16px] rounded-[6px] bg-[#00C9A7] hover:opacity-90',

    mobileNav:
      'w-full min-h-[40px] py-[8px] px-[16px] rounded-[6px] bg-[#00C9A7] hover:opacity-90',

    roi:
      'w-full h-[49px] rounded-[6px] bg-[#00C9A7] py-[12px] px-[24px] hover:opacity-90',
  };

  return (
    <button
      type={type}
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}