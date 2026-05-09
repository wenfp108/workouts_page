import { useEffect } from 'react';
import { initSvgColorAdjustments } from '@/utils/colorUtils';

const SVGStat = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initSvgColorAdjustments();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="svgStat">
      <img
        src="/assets/grid.svg"
        alt="Grid Statistics"
        className="grid-svg mt-4 h-auto w-full"
      />
      <img
        src="/assets/github.svg"
        alt="GitHub Contributions"
        className="github-svg mt-4 h-auto w-full"
      />
    </div>
  );
};

export default SVGStat;
