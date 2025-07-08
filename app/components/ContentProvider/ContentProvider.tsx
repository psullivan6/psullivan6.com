'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type ContentContextType = {
  tone: 'default' | 'snarky';
  setTone: (tone: 'default' | 'snarky') => void;
  toggleTone: () => void;
};

const initialContentContext: ContentContextType = {
  tone: 'default',
  setTone: () => {},
  toggleTone: () => {},
};

const ContentContext = createContext<ContentContextType>(initialContentContext);

type ContentProviderProps = {
  children: ReactNode;
};

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [tone, setTone] = useState<ContentContextType['tone']>(initialContentContext.tone);

  const toggleTone = () => {
    setTone((prevTone) => (prevTone === 'default' ? 'snarky' : 'default'));
  };

  const value = {
    tone,
    setTone,
    toggleTone,
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContentContext = () => {
  const context = useContext(ContentContext);

  if (context === undefined) {
    throw new Error('useContentContext must be used within a ContentProvider');
  }

  return context;
};
