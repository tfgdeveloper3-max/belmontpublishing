"use client";

const GlobalAnimations: React.FC = () => {
    return (
        <style jsx global>{`
      /* Custom Cursor Styles */
      #custom-cursor {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 99999;
        mix-blend-mode: difference;
      }
      .cursor-dot {
        position: fixed;
        width: 6px;
        height: 6px;
        background: #f57c15;
        border-radius: 50%;
        pointer-events: none;
      }
      .cursor-ring {
        position: fixed;
        width: 36px;
        height: 36px;
        border: 1.5px solid rgba(245, 124, 21, 0.5);
        border-radius: 50%;
        pointer-events: none;
      }

      /* Hide on touch devices */
      @media (pointer: coarse) {
        #custom-cursor { display: none !important; }
      }

      /* Text Selection Color */
      ::selection {
        background: rgba(245, 124, 21, 0.3);
        color: #fff;
      }
    `}</style>
    );
};

export default GlobalAnimations;