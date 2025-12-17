import { signup } from '@/app/actions/auth'

export default async function RegisterPage(props: { searchParams: Promise<{ error?: string }> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form action={signup} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Register Karyawan</h1>
        
        {searchParams.error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {searchParams.error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none text-black" 
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input 
            name="password" 
            type="password" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none text-black" 
          />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white font-bold p-2 rounded hover:bg-green-700 transition duration-200">
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun? <a href="/login" className="text-blue-600 hover:underline">Login disini</a>
        </p>
      </form>
    </div>
  )
}