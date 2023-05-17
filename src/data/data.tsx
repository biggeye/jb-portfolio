import {
  ArrowDownTrayIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'JJGolf presents Flight School',
  description: "Professional Golf Camp Experience",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Flight School`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      42-year golf veteran <strong className="text-stone-100">James Jordan</strong> hosts a week-long golf camp
      this summer, designed to provide an intimate learning environment.  This is an opportunity to immerse yourself
      in the material and learn how to coach yourself.  If you are serious about 
      <strong className="text-stone-100"> improving your golf game,</strong> this is what you need.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Only 10 slots available for this summer session, 
        deposits are due by <strong className="text-stone-100">May 31</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/questionnaire.pdf',
      text: 'Questionnaire',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Coach', text: 'Video Swing Analysis, Short Game Mechanics, Feel, Fitness/Nutrition, Mental Approach.', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Training and Development',
    skills: [
      {
        name: 'Video Swing Analysis',
        level: 10,
      },
      {
        name: 'Short Game Mechanics',
        level: 10,
      },
      {
        name: 'Fitness Class',
        level: 10,
      },
      {
        name: 'Nutrition',
        level: 10,
      },
      {
        name: 'Mental Approach',
        level: 10,
      },
      ],
  },
];



/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Plan',
    description: 'A Preparation Manual (with over 100 practice tasks), designed for Coaches, Parents, Juniors, Amateurs, Collegiate and Professional Golfers (all ages / skill sets) to develop their Total Golf Game.  This is YOUR Plan.',
    url: 'https://jamesjordangolf.com/plan/',
    image: porfolioImage1,
  },
  {
    title: 'Fight or Flight',
    description: 'A Golfers Mental Guide & Workshop, In How One Can Respond During Competitive Play.',
    url: 'https://store.jamesjordangolf.com/fight-of-flight/',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019',
    location: 'Golf Digest',
    title: 'Top 25 Coach',
    content: <p></p>,
  },
  {
    date: '2020',
    location: 'Golf Digest',
    title: 'Top 25 Coach',
    content: <p></p>,
  },
  {
    date: '2021',
    location: 'Golf Digest',
    title: 'Top 25 Coach',
    content: <p></p>,
  },
  {
    date: '2022',
    location: 'Golf Digest',
    title: 'Top 25 Coach',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2008 - Present',
    location: 'Southern California',
    title: 'Coaching Hours',
    content: (
      <p>
        50,000+
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Angelo Palumbo (Licensed Fitness Instructor)',
      text: 'When I came to James, I was trying to teach myself “stack and tilt” and self diagnose. I found that many of my fundamentals and self diagnostics we’re hurting my swing and golf performance. One day at the range, James noticed the challenges and offered to assist in bettering my swing. The changes that night were immediately effective and we began the process of a weekly meeting in bettering my swing. He has immensely improved my swing and thought process along the way.',
      image: 'https://pbs.twimg.com/profile_images/3381558732/5809c8f3abc1a075d2ffcb53f78d40f0_400x400.jpeg',
    },
    {
      name: 'Elgin Baylor',
      text: 'Its always a good decision to see James before one of our Laker tournaments. He relates the tempo and feel of the golf swing “Like Shooting A Free Throw“ Nice and Smooth. Thanks for your help J.',
      image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/76127.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'jfjpga@gmail.com',
      href: 'mailto:jfjpga@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Lake Lindero Golf Course',
      href: 'https://www.google.com/maps/place/Lake+Lindero+Golf+Course/@34.15577,-118.789767,17z/data=!3m1!4b1!4m6!3m5!1s0x80e8241555c02ba1:0xc9c7777aa23579e6!8m2!3d34.15577!4d-118.789767!16s%2Fg%2F1tdxqs8p',
    },
    {
      type: ContactType.Instagram,
      text: '@JAMESJORDANGOLF',
      href: 'https://www.instagram.com/JAMESJORDANGOLF/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/JAMESJORDANGOLF/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
