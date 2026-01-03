import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  readonly stats = [
    { number: '09+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Delivered' },
    { number: '10+', label: 'Developers Mentored' },
    { number: '8%', label: 'Performance Gain' },
  ];

  readonly aboutFeatures = [
    {
      icon: 'fas fa-code',
      title: 'Clean Code',
      desc: 'Following SOLID principles and best practices',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance',
      desc: 'Optimizing systems for efficiency and scale',
    },
    { icon: 'fas fa-users', title: 'Leadership', desc: 'Mentoring teams and fostering growth' },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning',
      desc: 'Continuous improvement and innovation',
    },
  ];

  readonly experiences: Experience[] = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'OneAdvanced',
      location: 'Bengaluru',
      period: 'Feb 2021 - Nov 2024',
      project: 'Time Capture (United Kingdom)',
      description:
        'Market-leading time recording solution designed to optimize firm-wide productivity with cloud-hosted and on-premises deployment options.',
      achievements: [
        'Led TDD implementation, fostering high-quality code culture',
        'Designed and optimized 30+ complex stored procedures improving API functionality',
        'Achieved 8% performance enhancement through strategic code optimization',
        'Successfully migrated Angular 10 → 16 and .NET Framework 4 → .NET 8',
        'Implemented OpenAPI/Swagger for standardized API documentation',
        'Mentored 3 interns successfully transitioning to full-time roles',
      ],
      technologies: ['Angular 16', '.NET 8', 'GitHub Actions', 'Azure DevOps', 'SonarQube'],
    },
    {
      title: 'Software Engineer',
      company: 'Emids Technology Pvt Ltd.',
      location: 'Bengaluru',
      period: 'Sept 2020 - Feb 2021',
      project: 'Greenway Prime Suite (USA)',
      description:
        'Comprehensive web-based healthcare application for service tickets and appointment scheduling integrating EHR and Practice Management functionalities.',
      achievements: [
        'Spearheaded VB.NET to .NET Core 2+ and Angular 6 migration',
        'Achieved 30% performance improvement and enhanced scalability',
        'Implemented comprehensive unit tests reducing bugs significantly',
        'Diagnosed and resolved critical defects ensuring seamless functionality',
      ],
      technologies: ['Angular 6', '.NET Core 2+', 'Web API', 'Unit Testing'],
    },
    {
      title: 'Software Engineer',
      company: 'Exalca Technologies Private Limited',
      location: 'Bengaluru',
      period: 'Dec 2016 - Sept 2020',
      project: 'Vendor Portal (United Breweries Limited)',
      description:
        'Enterprise supply chain management application facilitating ASN creation, PO acknowledgment, and comprehensive gate entry/exit management.',
      achievements: [
        'Conducted in-depth bug analysis and defect resolution',
        'Refactored and optimized code achieving 10% performance improvement',
        'Led design and deployment of Truck Planning System for enterprise logistics',
        'Mentored 2 interns fostering professional growth',
      ],
      technologies: ['Angular 2+', '.NET Core 1+', 'REST API', 'SQL Server'],
    },
  ];

  readonly skills: Skill[] = [
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100',
      iconColor: 'text-blue-600',
      categories: [
        { label: '.NET & Core Technologies', skills: ['C#', '.NET 8', '.NET Core', 'ASP.NET MVC'] },
        {
          label: 'API & Web Services',
          skills: ['REST API', 'Web API', 'Microservices', 'OpenAPI/Swagger'],
        },
      ],
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Frontend Development',
      gradient: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100',
      iconColor: 'text-green-600',
      categories: [
        { label: 'Angular Expertise', skills: ['Angular 2+', 'Angular 16+', 'TypeScript', 'RxJS'] },
        { label: 'Web Technologies', skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'] },
      ],
    },
    {
      icon: 'fas fa-database',
      title: 'Data & Databases',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-100',
      iconColor: 'text-orange-600',
      categories: [
        { label: 'Database Technologies', skills: ['MS SQL', 'SQL Server', 'Entity Framework'] },
        { label: 'Data Tools', skills: ['SSMS', 'Query Optimization', 'Stored Procedures'] },
      ],
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud & DevOps',
      gradient: 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100',
      iconColor: 'text-indigo-600',
      categories: [
        { label: 'Cloud Platforms', skills: ['Azure Cloud', 'Azure Portal', 'IIS'] },
        {
          label: 'CI/CD & Tools',
          skills: ['GitHub Actions', 'Azure DevOps', 'Docker', 'CI/CD Pipelines'],
        },
      ],
    },
    {
      icon: 'fas fa-tools',
      title: 'Tools & Practices',
      gradient: 'bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100',
      iconColor: 'text-pink-600',
      categories: [
        { label: 'Development Tools', skills: ['Visual Studio', 'VS Code', 'Git', 'Postman'] },
        { label: 'Quality & Practices', skills: ['TDD', 'SonarQube', 'Code Review', 'Agile'] },
      ],
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Soft Skills',
      gradient: 'bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-100',
      iconColor: 'text-cyan-600',
      categories: [
        {
          label: 'Leadership & Collaboration',
          skills: ['Team Leadership', 'Mentoring', 'Problem Solving', 'Architecture Design'],
        },
        { label: 'Methodologies', skills: ['Agile/Scrum', 'SDLC', 'System Design'] },
      ],
    },
  ];

  readonly competencies = [
    { skill: 'C# & .NET Ecosystem', level: 95, label: 'Expert' },
    { skill: 'Angular & TypeScript', level: 95, label: 'Expert' },
    { skill: 'System Architecture', level: 90, label: 'Advanced' },
    { skill: 'Azure & Cloud Services', level: 85, label: 'Advanced' },
  ];

  readonly contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      link: 'mailto:danish.8321@gmail.com',
      text: 'danish.8321@gmail.com',
    },
    { icon: 'fas fa-phone', title: 'Phone', link: 'tel:+917397451702', text: '+91 7397451702' },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/danishahmad8321',
      text: 'Connect with me',
    },
  ];
}
