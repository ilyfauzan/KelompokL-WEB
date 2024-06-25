// pages/dashboard.js
import SideNavbar from "../components/SideNavbar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideNavbar />
      {/* Konten Dashboard */}
      <div className="flex flex-col items-center justify-center w-full px-8 ml-16"> {/* Increased ml to 16 */}
        {/* Membuat konten dashboard lebih besar */}
        <h1 className="text-4xl font-bold mb-8 text-center">Selamat Datang di Dashboard!</h1>
        <div className="bg-white rounded-lg shadow-md w-full md:max-w-4xl p-8 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Tentang Sistem Manajemen Penjara</h2>
          <p className="text-lg text-gray-700 mb-6">Kami membangun platform ini untuk membantu dalam manajemen yang efisien dan transparan di sistem penjara. Kami menyediakan alat dan fitur yang dapat memudahkan staf penjara dalam mengelola data, jadwal, dan kegiatan di dalam fasilitas.</p>
          <hr className="my-6" />
          <h2 className="text-3xl font-semibold text-purple-600 mb-4">Statistik Penjara</h2>
          <p className="text-lg text-gray-700 mb-6">Lihat data terkini tentang populasi tahanan, tingkat keamanan, dan program rehabilitasi di fasilitas kami. Kami berkomitmen untuk menciptakan lingkungan yang aman dan produktif.</p>
        </div>
      </div>
    </div>
  );
}
