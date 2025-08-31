import { LanguageToolTip, Props } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface IconToolTipProps extends Props {
  languageDetails: LanguageToolTip;
}

const IconToolTip = ({ languageDetails }: IconToolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger><languageDetails.icon size={50}/></TooltipTrigger>
      <TooltipContent >{languageDetails.language}</TooltipContent>
    </Tooltip>
  );
};

export default IconToolTip;
