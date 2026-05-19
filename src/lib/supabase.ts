import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wkidhlryguamfpevpxrc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndraWRobHJ5Z3VhbWZwZXZweHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODE2OTQsImV4cCI6MjA5NDc1NzY5NH0.uWTu20hKBOBV1XOOamGhV3xtB9EY6U2Q0ozJXB-FJ7I'

export const supabase = createClient(supabaseUrl, supabaseKey)
