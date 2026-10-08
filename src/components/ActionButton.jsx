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
      'w-[335px] h-[45px] rounded-[6px] bg-[#00C9A7] pt-[12px] pr-[24px] pb-[12px] pl-[24px] hover:opacity-90',
    secondary:
      'w-[165px] h-[45px] rounded-[6px] border border-[#2A3A4A] border-t-[#2A3A4A] pt-[11px] pr-[22px] pb-[11px] pl-[22px] hover:bg-[#00C9A7]/10 transition-colors',
    nav:
      'w-[106px] h-[36px] py-[8px] px-[16px] rounded-[6px] bg-[#00C9A7] hover:opacity-90',
    mobileNav:
      'w-full h-[36px] py-[8px] px-[16px] rounded-[6px] bg-[#00C9A7] hover:opacity-90',
  };

  return (
    <button type={type} className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
