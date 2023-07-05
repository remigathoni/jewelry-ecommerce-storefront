import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hdnogkkvsjvmkpufcyao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkbm9na2t2c2p2bWtwdWZjeWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5NDE0NjYsImV4cCI6MTk5MjUxNzQ2Nn0.5SNDQ9_K1j59FwMgcFbDFULGVUCaxmNFMdijAun1ZtQ";
const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

export default supabase;
