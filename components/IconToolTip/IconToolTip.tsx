import { LanguageToolTip, Props } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface IconToolTipProps extends Props {
  languageDetails: LanguageToolTip;
}

const IconToolTip = ({ languageDetails }: IconToolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>{languageDetails.icon}</TooltipTrigger>
      <TooltipContent className='text-foreground'>{languageDetails.language}</TooltipContent>
    </Tooltip>
  );
};

export default IconToolTip;
