interface Role {
  title: string;
  company: string;
  // ISO year-month (YYYY-MM); omit end for a current role
  start: string;
  end?: string;
}

const Roles: Role[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Jellyfish',
    start: '2024-07'
  },
  {
    title: 'Software Engineer II',
    company: 'Jellyfish',
    start: '2023-06',
    end: '2024-06'
  },
  {
    title: 'Software Engineer',
    company: 'Jellyfish',
    start: '2022-06',
    end: '2023-05'
  },
  {
    title: 'Co-Founder & CTO',
    company: 'Pallyt Technologies',
    start: '2021-02',
    end: '2022-07'
  },
  {
    title: 'Angular Web Developer',
    company: 'Bio-CS Bridge Project',
    start: '2019-08',
    end: '2022-05'
  },
  {
    title: 'Network Automation Intern',
    company: 'State Street Corporation',
    start: '2019-06',
    end: '2019-08'
  }
];

export default Roles;
