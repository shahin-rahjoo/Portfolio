export function LoadingSpinner() {
  return (
    <>
      <style>{`
        @keyframes sk-rotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes sk-bounce {
          0%, 100% { transform: scale(0); }
          50%       { transform: scale(1); }
        }
        .sk-spinner {
          width: 40px;
          height: 40px;
          position: relative;
          animation: sk-rotate 2s infinite linear;
        }
        .sk-dot {
          width: 60%;
          height: 60%;
          display: inline-block;
          position: absolute;
          top: 0;
          background-color: #f97316;
          border-radius: 100%;
          animation: sk-bounce 2s infinite ease-in-out;
        }
        .sk-dot2 {
          top: auto;
          bottom: 0;
          animation-delay: -1s;
        }
      `}</style>

      <div className="sk-spinner">
        <div className="sk-dot" />
        <div className="sk-dot sk-dot2" />
      </div>
    </>
  );
}
