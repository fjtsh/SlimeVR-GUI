import { NavLink } from 'react-router-dom';
import { useOnboarding } from '../../../hooks/onboarding';
import { Button } from '../../commons/Button';
import { SlimeVRIcon } from '../../commons/icon/SimevrIcon';
import { SteamIcon } from '../../commons/icon/SteamIcon';
import { Typography } from '../../commons/Typography';
import { Trans, useTranslation } from 'react-i18next';

export function HomePage() {
  const { applyProgress, skipSetup } = useOnboarding();
  const { t, i18n } = useTranslation('onboarding');

  const changeLanguage = () => {
    i18n.changeLanguage('en');
  };

  applyProgress(0.1);

  return (
    <div className="flex flex-col gap-5 h-full items-center w-full justify-center">
      <div className="absolute top-20 right-20">
        <Button variant="secondary" onClick={changeLanguage}>
          <>
            <SteamIcon /> Language
          </>
        </Button>
      </div>
      <div className="flex flex-col gap-5 items-center z-10">
        <SlimeVRIcon></SlimeVRIcon>
        <Typography variant="main-title">
          {t('home.welcome', 'Welcome to SlimeVR')}
        </Typography>
        <div className="flex flex-col items-center">
          <Typography color="secondary">
            <Trans i18nKey={'onboarding:home.description'}>
              Bringing full-body tracking <br />
              to everyone
            </Trans>
          </Typography>
        </div>
        <Button variant="primary" to="/onboarding/wifi-creds">
          {t('home.doSetup', 'Lets get setup!')}
        </Button>
        <NavLink to="/" onClick={skipSetup}>
          <Typography color="secondary">
            {t('common:skipSetup', 'Skip setup')}
          </Typography>
        </NavLink>
      </div>

      <div
        className="absolute bg-accent-background-50 w-full rounded-full"
        style={{
          bottom: 'calc(-300vw / 1.04)',
          height: '300vw',
          width: '300vw',
        }}
      ></div>
      <img
        className="absolute"
        src="/images/slime-girl.png"
        style={{
          width: '40%',
          maxWidth: 800,
          bottom: '1%',
          left: '9%',
        }}
      />
      <img
        className="absolute"
        src="/images/slimes.png"
        style={{
          width: '40%',
          maxWidth: 800,
          bottom: '1%',
          right: '9%',
        }}
      />
    </div>
  );
}
