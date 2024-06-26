type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[],
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// 'remove-btn hovered selectable pdg'
