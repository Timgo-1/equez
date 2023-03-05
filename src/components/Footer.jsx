import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        &copy; <span>{year}</span> All rights reserved by Equez
      </p>
    </div>
  );
}

