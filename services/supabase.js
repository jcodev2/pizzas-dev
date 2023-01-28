import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aroymlgjkmfbqdrnsjch.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyb3ltbGdqa21mYnFkcm5zamNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NzA3ODgsImV4cCI6MTk4ODM0Njc4OH0.aQcuSSFQvA3AiBm-oyP7NUac5dyseO8BWAWY3XyXwh0'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
