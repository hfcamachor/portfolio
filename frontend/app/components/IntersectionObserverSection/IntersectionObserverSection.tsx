import React, { useRef, useEffect, ReactNode } from 'react';

interface IntersectionObserverSectionProps {
  children: ReactNode;
  customClass?: string;
}

const IntersectionObserverSection: React.FC<IntersectionObserverSectionProps> = ({ children, customClass }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation or other actions when section is intersected
          console.log('Section is intersecting:', entry.target);
        }
      });
    });

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return <div className={customClass} ref={sectionRef}>{children}</div>;
};

export default IntersectionObserverSection;