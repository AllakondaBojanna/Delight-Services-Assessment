// src/withLogging.tsx
import React, { ComponentType, useEffect } from 'react';

// Ensure P extends JSX.IntrinsicAttributes
function withLogging<P extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<P>) {
  const ComponentWithLogging: React.FC<P> = (props) => {
    useEffect(() => {
      console.log("Component Mounted");

      return () => console.log("Component Unmounted");
    }, []);

    return <WrappedComponent {...props} />; // Pass props directly
  };

  return ComponentWithLogging;
}

export default withLogging;
