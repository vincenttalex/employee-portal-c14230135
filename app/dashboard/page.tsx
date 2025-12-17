import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '@/app/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()

  // 1. Validasi User Session (Server Side)
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect('/login')
  }

  // 2. Fetch Data Announcements
  const { data: announcements } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">Employee Portal</h1>
            <p className="text-gray-600 mt-1">
              Login sebagai: <span className="font-semibold text-blue-600">{user.email}</span>
            </p>
          </div>
          
          {/* Tombol Logout (Server Action) */}
          <form action={logout}>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200 font-medium shadow-sm">
              Logout
            </button>
          </form>
        </div>

        {/* Content Section: Announcements */}
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-blue-500 pl-3">
          Pengumuman Kantor
        </h2>
        
        <div className="grid gap-4">
          {announcements?.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}

          {(!announcements || announcements.length === 0) && (
            <div className="bg-yellow-50 text-yellow-800 p-4 rounded border border-yellow-200">
              Belum ada pengumuman yang ditampilkan.
            </div>
          )}
        </div>

      </div>
    </div>
  )
}