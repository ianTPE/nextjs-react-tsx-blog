'use client';

import React from 'react';

interface ClientPostWrapperProps {
  children: React.ReactNode;
}

export default function ClientPostWrapper({ children }: ClientPostWrapperProps) {
  return <>{children}</>;
}
