import { HomePageType } from '@/type';
import {create} from 'zustand';



const useHomeStore = create<HomePageType>((set) => ({
  // Initial state
  bannerTitle: '',
  bannerDescription: '',
  bannerButtonName: undefined,
  electionDate: '',
  bannerImageAlt: '',
  bannerImage: '',
  loading:true,

  // Actions to update state
  updateBannerTitle: (newTitle: string) => set({ bannerTitle: newTitle }),
  updateBannerDescription: (newDescription: string) => set({ bannerDescription: newDescription }),
  updateBannerButtonName: (newButtonName?: string) => set({ bannerButtonName: newButtonName }),
  updateElectionDate: (newDate: string) => set({ electionDate: newDate }),
  updateBannerImageAlt: (newAltText: string) => set({ bannerImageAlt: newAltText }),
  updateBannerImage: (newImageUrl: string) => set({ bannerImage: newImageUrl }),
  updateLoading: (loading: boolean) => set({ loading: loading }),
}));

export default useHomeStore;
