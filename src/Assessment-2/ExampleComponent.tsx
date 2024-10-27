// ExampleComponent.tsx
import React from 'react';
import withLogging from './withLogging';

const ExampleComponent: React.FC = () => <div>Example Component with Logging</div>;

export default withLogging(ExampleComponent);
