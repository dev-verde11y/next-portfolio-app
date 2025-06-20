import { 
    SiJavascript, SiPhp, SiReact, SiVuedotjs, SiNextdotjs, 
    SiExpo, SiWordpress, SiLaravel, SiNodedotjs, SiPostgresql, 
    SiTypescript, SiGithub, SiLinkedin 
  } from 'react-icons/si';
  import { FaMobileAlt } from 'react-icons/fa';
  import { FiMail } from 'react-icons/fi';
  
  const iconComponents = {
    SiJavascript,
    SiPhp,
    SiReact,
    SiVuedotjs,
    SiNextdotjs,
    SiExpo,
    SiWordpress,
    SiLaravel,
    SiNodedotjs,
    SiPostgresql,
    SiTypescript,
    SiGithub,
    SiLinkedin,
    FaMobileAlt,
    FiMail
  };
  
  type CustomIconProps = {
    name: string;
    className?: string;
  };
  
  export const CustomIcon = ({ name, className = '' }: CustomIconProps) => {
    const IconComponent = iconComponents[name as keyof typeof iconComponents];
    
    if (!IconComponent) {
      console.warn(`Icon ${name} not found`);
      return <span className={className}>?</span>;
    }
  
    return <IconComponent className={className} />;
  };