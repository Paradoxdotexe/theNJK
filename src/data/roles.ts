interface Role {
  title: string;
  company: string;
  years: number | number[];
}

const Roles: Role[] = [
  {
    title: 'Front-end Engineer',
    company: 'Jellyfish',
    years: [2022, 2023]
  },
  {
    title: 'Co-Founder & CTO',
    company: 'Pallyt Technologies',
    years: [2021, 2022]
  },
  {
    title: 'Angular Web Developer',
    company: 'Bio-CS Bridge Project',
    years: [2019, 2020, 2021]
  },
  {
    title: 'Network Automation Intern',
    company: 'State Street Corporation',
    years: 2019
  }
];

export default Roles;
