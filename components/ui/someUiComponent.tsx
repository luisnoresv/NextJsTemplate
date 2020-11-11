import React from 'react';

interface IProps {
   some: string;
}

const someUiComponent: React.FC<IProps> = ({ some = 'some' }) => (
   <div>
      {some}
      Component
   </div>
);

export default someUiComponent;
