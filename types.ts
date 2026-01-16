
export enum Jenjang {
  SD = 'SD',
  SMP = 'SMP',
  SMA = 'SMA',
  SMK = 'SMK'
}

export enum PraktikPedagogis {
  Inkuiri = 'Inkuiri',
  PJBL = 'PJBL',
  Diskusi = 'Diskusi',
  Kolaboratif = 'Kolaboratif',
  ProblemSolving = 'Problem Solving',
  GameBased = 'Game Based Learning',
  Station = 'Station Learning'
}

export enum DimensiLulusan {
  Keimanan = 'Keimanan & Ketakwaan',
  Kewargaan = 'Kewargaan',
  Kritis = 'Penalaran Kritis',
  Kreativitas = 'Kreativitas',
  Kolaborasi = 'Kolaborasi',
  Kemandirian = 'Kemandirian',
  Kesehatan = 'Kesehatan',
  Komunikasi = 'Komunikasi'
}

export interface RPMData {
  satuanPendidikan: string;
  namaGuru: string;
  nipGuru: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  jenjang: Jenjang;
  kelas: string;
  mataPelajaran: string;
  capaianPembelajaran: string;
  materiPelajaran: string;
  jumlahPertemuan: number;
  durasi: string;
  pedagogis: PraktikPedagogis[];
  dimensi: DimensiLulusan[];
}

export interface GeneratedRPM {
  content: string;
}
