// pages/api/profile/[id].js
export default function handler(req, res) {
    const {
      query: { id },
    } = req;
  
    // Mock data
    const profiles = [
      {
        id: '1',
        name: 'John Doe',
        nik: '89998888777766',
        tanggalMasuk: '01-01-2001',
        deskripsiKasus: 'Maling ayam pas idul adha',
        nomorKamar: '09',
        idSuratPenahanan: '123',
        namaStafKejaksaan: 'Agus Supriadi',
        tanggalPenerbitan: '10-10-2010',
      },
      // Add more profiles here
    ];
  
    const profile = profiles.find((profile) => profile.id === id);
  
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  }
  