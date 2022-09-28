import { useTranslation } from 'react-i18next';
import { useOnboarding } from '../../../../hooks/onboarding';
import { ArrowLink } from '../../../commons/ArrowLink';
import { Button } from '../../../commons/Button';
import { Typography } from '../../../commons/Typography';

export function AutomaticMountingPage() {
  const { t } = useTranslation('onboarding');
  const { applyProgress, skipSetup, state } = useOnboarding();

  applyProgress(0.7);

  return (
    <>
      <div className="flex flex-col gap-5 h-full items-center w-full justify-center">
        <div className="flex flex-col w-full h-full justify-center px-20">
          <div className="flex gap-8">
            <div className="flex flex-col max-w-md gap-3">
              {!state.alonePage && (
                <ArrowLink to="/onboarding/enter-vr" direction="left">
                  {t('autoMount.goBack', 'Go Back to Enter VR')}
                </ArrowLink>
              )}
              <Typography variant="main-title">
                {t('autoMount.title', 'Mount calibration!')}{' '}
                <span className="p-1 bg-accent-background-30 text-standard rounded-md">
                  {t('common:wip', 'Work in progress')}
                </span>
              </Typography>
              <Typography color="secondary">
                {t(
                  'autoMount.description',
                  "This feature isn't done, just choose manual mounting."
                )}
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full py-4 flex flex-row">
          <div className="flex flex-grow">
            {!state.alonePage && (
              <Button variant="secondary" to="/" onClick={skipSetup}>
                {t('common:skipSetup', 'Skip setup')}
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              state={{ alonePage: state.alonePage }}
              to="/onboarding/mounting/manual"
            >
              {t('autoMount.manuallySetMounting', 'Manually set mounting')}
            </Button>
            {!state.alonePage && (
              <Button variant="primary" to="/onboarding/reset-tutorial">
                {t('autoMount.gotoNext', 'Next step')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
