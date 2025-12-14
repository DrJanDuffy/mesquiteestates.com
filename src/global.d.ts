import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
    }
  }
}

export {};

