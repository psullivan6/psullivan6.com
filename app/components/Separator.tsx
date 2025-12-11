import { ComponentPropsWithoutRef } from 'react';

type SeparatorProps = ComponentPropsWithoutRef<'hr'>;

/**
 * Custom horizontal rule Element
 * - className prop is intentionally omitted to leverage emoji content; any custom classes will override the entire Element
 * @param props HRElement props
 * @returns HRElement
 */
const Separator = (props: SeparatorProps) => {
  return (
    <hr
      className="h-auto border-none my-12 [&&]:flex [&&]:justify-center after:content-['._._\1F332_\1F3D4_\1F332_._.'] after:mx-auto after:block after:color-prose"
      {...props}
    />
  );
};

export default Separator;
