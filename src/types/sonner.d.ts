declare module 'sonner' {
  import { ReactNode } from 'react';
  
  export interface ToasterProps {
    children?: ReactNode;
    [key: string]: any;
  }

  export interface ToastOptions {
    description?: string;
    duration?: number;
    type?: 'success' | 'error' | 'info' | 'warning';
  }

  export const toast: {
    (message: string, options?: ToastOptions): void;
    success(message: string, options?: ToastOptions): void;
    error(message: string, options?: ToastOptions): void;
    info(message: string, options?: ToastOptions): void;
    warning(message: string, options?: ToastOptions): void;
  };
  
  export function Toaster(props: ToasterProps): JSX.Element;
} 