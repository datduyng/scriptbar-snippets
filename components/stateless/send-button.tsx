const SendButton = ({ onClick }: any) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="send-button-container" onClick={handleClick}>
      <SendIcon fill="white" className="send-button__arrow-icon" />
      <style jsx>{`
        .send-button-container {
          width: 24px;
          margin: 0 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0070F3;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        :global(.send-button__arrow-icon) {
          width: 100%;
          height: 100%;
          padding: 4px;
          transition: transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms;
          box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.1);
        }
        .send-button-container:hover {
          opacity: 0.8;
        }
        .send-button-container:active {
          transform: scale(0.9);
        }
        .send-button-container:active :global(.send-button__arrow-icon) {
          transform: translate(24px, -24px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SendButton;

const SendIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: any) => {
  const color = fill;
  return (
    <svg
      data-name="Iconly/Curved/Lock"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g transform="translate(2 2)">
        <path
          d="M19.435.582A1.933,1.933,0,0,0,17.5.079L1.408,4.76A1.919,1.919,0,0,0,.024,6.281a2.253,2.253,0,0,0,1,2.1L6.06,11.477a1.3,1.3,0,0,0,1.61-.193l5.763-5.8a.734.734,0,0,1,1.06,0,.763.763,0,0,1,0,1.067l-5.773,5.8a1.324,1.324,0,0,0-.193,1.619L11.6,19.054A1.91,1.91,0,0,0,13.263,20a2.078,2.078,0,0,0,.25-.01A1.95,1.95,0,0,0,15.144,18.6L19.916,2.525a1.964,1.964,0,0,0-.48-1.943"
          fill={color}
        />
      </g>
    </svg>
  );
};