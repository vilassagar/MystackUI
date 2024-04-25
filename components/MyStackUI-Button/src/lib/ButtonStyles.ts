import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: 'text-center relative font-semibold whitespace-nowrap align-middle outline-none inline-flex items-center justify-center select-none',
  variants: {
    size: {
      xs: 'text-xs py-1 px-2',
      md: 'text-sm py-2 px-4',
      lg: 'text-base py-3 px-6',
      xl: 'text-lg py-4 px-8',
      xxl: 'text-xl py-5 px-10',
      square_xs: 'text-xs h-4 w-4 p-1',
      square_sm: 'text-sm h-6 w-6 p-1',
      square_md: 'text-base h-8 w-8 p-1',
      square_lg: 'text-lg h-10 w-10 p-1',
      square_xl: 'text-xl h-12 w-12 p-1',
    },
    color: {
        primary: 'bg-blue-500 text-white',
        neutral: 'bg-zinc-500 text-black dark:text-white'
      },
    vPadding: {
      xs: 'py-[4px]',
      sm: 'py-[8px]',
      md: 'py-[12px]',
      lg: 'py-[16px]',
    },
    vSpace: {
      xs: 'my-1',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
    },
    HSpace: {
      xs: 'mx-1',
      sm: 'mx-2',
      md: 'mx-4',
      lg: 'mx-6',
    },
    align: {
      center: 'mx-auto',
      right: 'ml-auto',
      left: 'mr-auto',
      top: 'mb-auto',
      bottom: 'mt-auto',
    },
    rounded: {
      none: 'rounded-none',
      xs: 'rounded-[2px]',
      sm: 'rounded-[4px]',
      normal: 'rounded-[8px]',
      lg: 'rounded-[12px]',
      full: 'rounded-full',
    },
    behavior: {
      block: 'w-full',
    },
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: [
    {
      color: 'primary',
      flat: true,
      class: 'bg-blue-500/40'
    },
    {
      color: 'neutral',
      flat: true,
      class: 'bg-zinc-500/20'
    }
  ]
});

// create solid button styles
export const solidButton = tv({
  extend: baseButton,
  variants: {
    color: {
      green:
        'bg-[#58cc02] text-gray-100 shadow active:shadow-none active:translate-y-[5px]',
      teal: 'bg-[#0D9488] text-gray-100 shadow-teal active:shadow-none active:translate-y-[5px]',
      yellow:
        'bg-[#FFC700] text-gray-100 shadow-yellow active:shadow-none active:translate-y-[5px]',
      gray: 'bg-[#64748B] text-gray-100 shadow-blueGray active:shadow-none active:translate-y-[5px]',
    },
  },
});

//create outline button styles
export const outlineButton = tv({
  extend: baseButton,
  base: 'ring-1',
  variants: {
    color: {
      green:
        'ring-[#58cc02] text-[#58cc02] shadow active:shadow-none active:translate-y-[5px]',
      teal: 'ring-[#0D9488] text-[#0D9488] shadow-teal active:shadow-none active:translate-y-[5px]',
      yellow:
        'ring-[#FFC700] text-[#FFC700] shadow-yellow active:shadow-none active:translate-y-[5px]',
      gray: 'ring-[#64748B] text-[#64748B] shadow-blueGray active:shadow-none active:translate-y-[5px]',
    },
  },
});

//create ghost button styles
export const ghostButton = tv({
  extend: baseButton,
  variants: {
    color: {
      green: 'text-[#58cc02]',
      teal: 'text-[#0D9488]',
      yellow: 'text-[#FFC700]',
      gray: 'text-[#64748B]',
    },
  },
});
