import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mhupwgisxaqrejjgzbpr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odXB3Z2lzeGFxcmVqamd6YnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MDg4OTcsImV4cCI6MjAyNTM4NDg5N30.-qQDaQ81CQdUmRYUxelU933PtYMiXQTAPAsBEWxcrV8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
