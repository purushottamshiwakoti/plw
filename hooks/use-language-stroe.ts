"use client"
import {create} from 'zustand';

// Define the store state
interface LanguageStore {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

// Create the store
const useLanguageStore = create<LanguageStore>((set) => {
  // Check if localStorage is available
  const initialLanguage = typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') || 'en' : 'en';

  return {
    selectedLanguage: initialLanguage, // Default language is English
    setSelectedLanguage: (language) => {
      set({ selectedLanguage: language });
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLanguage', language); // Save selected language to local storage
      }
    },
  };
});

export default useLanguageStore;
