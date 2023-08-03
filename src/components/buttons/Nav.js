import React from "react";

export default function NavButton({ title, link, page, currentPage, handlePageChange}) {
  return <a href={link} onClick={() => handlePageChange(page)} className={currentPage === page ? 'text-slate-500' : 'text-white hover:text-slate-300 hover:underline '}>{title}</a>;
}
