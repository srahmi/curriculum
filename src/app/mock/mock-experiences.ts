import { Experience } from '../model/experience';

export const EXPERIENCES: Experience[] = [
  {
    id: 11,
    client: 'Cision',
    from: new Date('2017-12-01'),
    to: new Date(),
    title: 'Full-stack developer',
    technologies: ['Angular', 'Java'],
    description: ''
  },
  {
    id: 12,
    client: 'Sacem',
    from: new Date('2016-10-01'),
    to: new Date('2017-12-01'),
    title: 'Full-stack developer',
    technologies: ['Angular', 'Java8'],
    description: ''
  },
  {
    id: 13,
    client: 'Mediametrie',
    from: new Date('2014-03-01'),
    to: new Date('2016-10-01'),
    title: 'Full-stack developer',
    technologies: ['Amazon AWS'],
    description: ''
  },
  {
    id: 14,
    client: 'Previous experiences',
    from: new Date('2009-09-01'),
    to: new Date('2013-12-01'),
    title: 'Java backend engineer',
    technologies: ['Java', 'Spring', 'Hibernate'],
    description: ''
  }
];
