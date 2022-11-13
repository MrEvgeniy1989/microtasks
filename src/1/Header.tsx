import React from 'react';
type HeaderTypeProps = {
    titleForHeader: string
}

export const Header: React.FC<HeaderTypeProps> = (props) => {
  return (
      <div>
          {props.titleForHeader}
      </div>
  );
}