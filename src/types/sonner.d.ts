declare module 'sonner' {
  import { ReactNode } from 'react';
  
  export interface ToasterProps {
    children?: ReactNode;
    [key: string]: any;
  }
  
  export function Toaster(props: ToasterProps): JSX.Element;
} 