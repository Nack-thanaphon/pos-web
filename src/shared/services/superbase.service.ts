import supabase from "@/config/superbase.config";

interface Profile {
  profileName: string;
  details: string;
  reviewUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  phone: string;
  email: string;
  website: string;
}


export interface ProfileData {
  id: number;
  profile_name: string;
  details: string;
  review_url: string;
  youtube_url: string;
  tiktok_url: string;
  logo: string;
  phone: string;
  email: string;
  website: string;
  is_review_redirect: boolean;
  is_menu: boolean;
  is_review: boolean;
  is_deliverly: boolean;
  menu: {
    name: string;
    image: string;
    price: string;
  }[];
  photo: string;
  slug: string;
  address: string;
  type: string;
  location: string;
  business_type: string;
  reviews: string[];
};

interface SupabaseResponse<T> {
  data: T | null;
  error: Error | null;
}

const createProfile = async (profile: Profile): Promise<SupabaseResponse<any>> => {
  const { data, error } = await supabase
    .from('business_profiles')
    .insert([{
      profile_name: profile.profileName,
      details: profile.details,
      review_url: profile.reviewUrl,
      youtube_url: profile.youtubeUrl,
      tiktok_url: profile.tiktokUrl,
      phone: profile.phone,
      email: profile.email,
      website: profile.website
    }]).select();

  if (error) {
    console.error('Error creating profile:', error);
    return { data: null, error };
  }
  return { data, error: null };
};

const updateProfile = async (id: number, profile: Profile): Promise<SupabaseResponse<any>> => {
  const { data, error } = await supabase
    .from('business_profiles')
    .update({
      profile_name: profile.profileName,
      details: profile.details,
      review_url: profile.reviewUrl,
      youtube_url: profile.youtubeUrl,
      tiktok_url: profile.tiktokUrl,
      phone: profile.phone,
      email: profile.email,
      website: profile.website
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating profile:', error);
    return { data: null, error };
  }
  return { data, error: null };
};

const getAllProfiles = async (): Promise<SupabaseResponse<ProfileData[]>> => {
  const { data, error } = await supabase
    .from('business_profiles')
    .select('*');

  if (error) {
    console.error('Error fetching profiles:', error);
    return { data: null, error };
  }
  return { data, error: null };
};


const getProfileBySlug = async (slug: string): Promise<SupabaseResponse<any>> => {
  const { data, error } = await supabase
    .from('business_profiles')
    .select(`
      *,
      business_type:type (id, name)
    `)
    .eq('slug', slug)
    .single();

  console.log('data', data);
  if (error) {
    console.error('Error fetching profile by slug:', error);
    return { data: null, error };
  }
  return { data, error: null };
};
export { createProfile, updateProfile, getAllProfiles, getProfileBySlug };

