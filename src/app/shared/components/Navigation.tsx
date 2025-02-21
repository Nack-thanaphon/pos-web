"use client"
import React, { RefObject } from 'react';

type Sections = {
  home: RefObject<HTMLElement>;
  promotion: RefObject<HTMLElement>;
  contact: RefObject<HTMLElement>;
  clients: RefObject<HTMLElement>;
  reviews: RefObject<HTMLElement>;
};

type NavigationProps = {
  sections: Sections;
};

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const scrollToSection = (section: RefObject<HTMLElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed flex justify-center py-4 bg-white rounded-[10px]  shadow-sm w-full left-0 top-0">
      <div className="py-2 rounded-[20px] text-center mx-2 px-3 h-fit bg-blue-500 hover:bg-blue-700 text-white" onClick={() => scrollToSection(sections.home)}>หน้าหลัก</div>
      <div className="py-2 rounded-[20px] text-center mx-2 px-3 h-fit bg-blue-500 hover:bg-blue-700 text-white" onClick={() => scrollToSection(sections.contact)}>ติดต่อ</div>
      <a href='https://www.facebook.com/taponitt' className="py-2 rounded-[20px] text-center mx-2 px-3 max-w-md h-fit bg-green-500 hover:bg-green-700 text-white" >สั่งซื้อตอนนี้</a>
    </div>
  );
};

export default Navigation;