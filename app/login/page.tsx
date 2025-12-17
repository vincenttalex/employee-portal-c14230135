import { login } from '@/app/actions/auth'

export default async function LoginPage(props: { searchParams: Promise<{ error?: string, message?: string }> }) {
  const searchParams = await props.searchParams;
  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form action={login} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login Portal</h1>
        
        {/* Menampilkan Pesan Error/Sukses jika ada */}
        {searchParams.error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {searchParams.error}
          </div>
        )}
        {searchParams.message && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
            {searchParams.message}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black" 
            placeholder="nama@perusahaan.com"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input 
            name="password" 
            type="password" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-black" 
            placeholder="********"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700 transition duration-200">
          Sign In
        </button>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun? <a href="/register" className="text-blue-600 hover:underline">Daftar disini</a>
        </p>
      </form>
    </div>
  )
}