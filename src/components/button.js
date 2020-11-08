import React from 'react';

function useCopyText(text) {
  const [isCopied, setIsCopied] = React.useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return {
    isCopied,
    onClick,
  };
}

export default function Button(props) {
  const { text } = props;
  const copy = useCopyText(text);

  return (
    <div>
      <button className='copyButton' onClick={copy.onClick}>
        {copy.isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
