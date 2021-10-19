export enum CourseType {
  CS = 'Computer Science',
  IMGD = 'Interactive Media & Game Development',
  DESIGN = 'Design'
}

interface Course {
  title: string;
  code: string;
  type: CourseType;
  grade: string;
}

// in chronological order
const Courses: Course[] = [
  {
    title: 'Accelerated Intro to Program Design',
    code: 'CS 1102',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Object-Oriented Design Concepts',
    code: 'CS 2102',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Systems Programming Concepts',
    code: 'CS 2303',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Intro to Machine Organization and Assembly',
    code: 'CS 2011',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Discrete Mathematics',
    code: 'CS 2022',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Algorithms',
    code: 'CS 2223',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Foundations of Computer Science',
    code: 'CS 3133',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Software Engineering\n',
    code: 'CS 3733',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Operating Systems',
    code: 'CS 3013',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Human-Computer Interaction',
    code: 'CS 3041',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Machine Learning',
    code: 'CS 4342',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Computer Graphics',
    code: 'CS 4731',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Webware: Computational Technology',
    code: 'CS 4241',
    type: CourseType.CS,
    grade: 'A'
  },
  {
    title: 'Critical Studies of Interactive Media',
    code: 'IMGD 1000',
    type: CourseType.IMGD,
    grade: 'A'
  },
  {
    title: 'The Game Development Process',
    code: 'IMGD 1001',
    type: CourseType.IMGD,
    grade: 'A'
  },
  {
    title: 'Game Audio I',
    code: 'IMGD 2030',
    type: CourseType.IMGD,
    grade: 'A'
  },
  {
    title: 'Social Issues in Interactive Media & Games',
    code: 'IMGD 2000',
    type: CourseType.IMGD,
    grade: 'A'
  },
  {
    title: 'Graphic Design',
    code: 'AR 2301',
    type: CourseType.DESIGN,
    grade: 'A'
  },
  {
    title: 'Visual Rhetoric',
    code: 'WR 2310',
    type: CourseType.DESIGN,
    grade: 'A'
  }
];

export default Courses;
