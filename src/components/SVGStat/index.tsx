import { useEffect, useState } from 'react';
import { initSvgColorAdjustments } from '@/utils/colorUtils';

const InlineSvg = ({ src, className }: { src: string; className: string }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then(setSvgContent)
      .catch((err) => console.error('Failed to load SVG:', src, err));
  }, [src]);

  if (!svgContent) return <div className="text-center">Loading...</div>;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

const SVGStat = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initSvgColorAdjustments();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="svgStat">
      <InlineSvg
        src="/assets/grid.svg"
        className="grid-svg mt-4 h-auto w-full"
      />
      <InlineSvg
        src="/assets/github.svg"
        className="github-svg mt-4 h-auto w-full"
      />
    </div>
  );
};

export default SVGStat;
