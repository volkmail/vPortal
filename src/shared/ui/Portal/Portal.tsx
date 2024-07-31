import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

const Portal = ({ children, element = document.body }: PortalProps) =>
  createPortal(children, element);

export { Portal };
