import React from "react";

export default function NavButton({ title, link, page, currentPage, handlePageChange}) {
  return <a href={link} onClick={() => handlePageChange(page)} className={currentPage === page ? 'text-white bg-orange-100 rounded p-1' : 'text-white hover:text-orange-100 hover:underline '}>{title}</a>;
}
