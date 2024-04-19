import React, { useEffect, useRef, useState, type FC } from 'react';
// styles
import './index.less';

export interface IndexBarProps {
  /** 数据源- 右侧索引列表 */
  indexs: string[];
  children: React.ReactNode;
  Panel: any;
  [key: string]: any;
}

const IndexBar: FC<IndexBarProps> = (props) => {
  const { indexs = [], children } = props;
  const containerRef: any = useRef(null);
  const [activedIndex, setActivedIndex] = useState<string | null>();

  const handleClick = (index: string) => {
    setActivedIndex(index);
    const targetElement = document.getElementById(`index-${index}`);
    if (targetElement) {
      containerRef.current?.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (indexs.length > 0) {
      const handleScroll = () => {
        const container = containerRef.current;
        const scrollTop = container.scrollTop;
        const indexElements = document.querySelectorAll('.index') || [];
        let activeIndex = null;
        indexElements?.forEach((element: any) => {
          const elementTop = element.offsetTop;
          if (scrollTop >= elementTop) {
            activeIndex = element.getAttribute('data-index');
          }
        });
        setActivedIndex(activeIndex);
      };

      containerRef.current.addEventListener('scroll', handleScroll);

      return () => {
        containerRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [indexs]);

  return (
    <div className="index-bar-react" ref={containerRef}>
      <div className="ib-index-select">
        {indexs?.map((index: string) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`ib-index-select-item ${
                activedIndex === index ? 'ib-index-select-item-active' : ''
              }`}
            >
              {index}
            </div>
          );
        })}
      </div>
      <div className="ib-list">{children}</div>
    </div>
  );
};

export default IndexBar;
