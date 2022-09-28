import { NavLink } from 'react-router-dom';
import { useOnboarding } from '../../../hooks/onboarding';
import { Button } from '../../commons/Button';
import { SlimeVRIcon } from '../../commons/icon/SimevrIcon';
import { Typography } from '../../commons/Typography';
import { useTranslation } from 'react-i18next';

export function DonePage() {
  const { applyProgress, skipSetup } = useOnboarding();
  const { t } = useTranslation('onboarding');

  applyProgress(1);

  return (
    <div className="flex flex-col gap-5 h-full items-center w-full justify-center">
      <div className="flex flex-col gap-5 items-center z-10">
        <SlimeVRIcon></SlimeVRIcon>
        <Typography variant="main-title">
          {t('done.title', "You're all set!")}
        </Typography>
        <div className="flex flex-col items-center">
          <Typography color="secondary">
            {t('done.body', 'Enjoy your full body experience')}
          </Typography>
        </div>
        <Button variant="primary" to="/" onClick={skipSetup}>
          {t('done.close', 'Close the guide')}
        </Button>
      </div>
    </div>
  );
}
