import {
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage2 from '../images/portfolio/IMG_1784.png';
import porfolioImage3 from '../images/portfolio/IMG_1785.png';
import porfolioImage4 from '../images/portfolio/IMG_1786.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import testimonialpic from '../images/portfolio/testimonial-1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
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
  Resume: 'schedule',
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
      href: 'https://aeye.world/flightschool',
      text: 'Questionaire',
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
{
    title: 'Golf Digest',
    description: 'Top 25 Coach',
    url: '/',
    image: porfolioImage3,
  },
{
    title: 'Golf Digest',
    description: 'Top 25 Coach',
    url: '/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '',
    location: '',
    title: 'Every Player Receives:',
    content: 
      <p>
          High Resistance Cord Stretch Training Band<br />
Golfers Training Aid<br />
Alignment Sticks<br />
Phone Tripod<br />
Scrub Brush<br />
Ball / Club Cleaning Towel<br />
Complete Club Fitting - Loft, Lie, Yardages, Specs, Checked, and Recommendations<br />
Flight School Tutorial Videos<br />
Drinks, Snacks provided at any time of the day<br />
All Golf Rounds<br />
All Range balls<br />
A Letter of recommendation for appropriate players<br />
<a href="https://jamesjordangolf.com/plan/"><b><u>"The Plan"</u></b></a><br />
<a href="https://store.jamesjordangolf.com/fight-of-flight/"><b><u>"Fight or Flight"</u></b></a><br />
Local Fitness Training Session<br />

  </p>

  },
];

export const experience: TimelineItem[] = [
  {
    date: '(Within 7-10 Days)',
    location: 'Post-Departure',
    title: 'Your Personalized E-Pub',
    content: (
      <p>
        Including all of your notes, videos, and drills.  This is your personalized book, that you can refer to at any time.  You will have access to this book for the rest of your life.
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
      name: 'Vincent & Father',      
      text: 'I cannot speak highly enough of the passion, knowledge, training, and self belief James Jordan has done with my son, not only developing his golf skills but his confidence and work ethic as well.',
      image: testimonialpic,
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
];
