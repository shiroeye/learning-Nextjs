import React from "react";

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="This is layout.tsx">{children}this is example layout </div>
  );
}
