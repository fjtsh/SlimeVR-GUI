import { Trans, useTranslation } from 'react-i18next';
import {
  AutoboneContextC,
  useProvideAutobone,
} from '../../../../hooks/autobone';
import { useOnboarding } from '../../../../hooks/onboarding';
import { ArrowLink } from '../../../commons/ArrowLink';
import { Button } from '../../../commons/Button';
import { Typography } from '../../../commons/Typography';
import { AutoboneStepper } from './AutoboneStepper';

export function AutomaticProportionsPage() {
  const { t } = useTranslation('onboarding');

  const { applyProgress, skipSetup, state } = useOnboarding();
  const context = useProvideAutobone();

  applyProgress(0.9);

  return (
    <AutoboneContextC.Provider value={context}>
      <div className="flex flex-col gap-5 h-full items-center w-full justify-center">
        <div className="flex flex-col w-full h-full justify-center max-w-3xl gap-5">
          <div className="flex flex-col max-w-lg gap-3">
            {!state.alonePage && (
              <ArrowLink to="/onboarding/reset-tutorial" direction="left">
                {t('automaticPropotions.goBack', 'Go Back to Reset tutorial')}
              </ArrowLink>
            )}
            <Typography variant="main-title">
              {t('automaticPropotions.title', 'Measure your body')}
            </Typography>
            <div>
              <Typography color="secondary">
                <Trans i18nKey="onboarding:automaticPropotions.description">
                  For SlimeVR trackers to work, we need to know the length of
                  your bones. <br />
                  This short calibration will measure it for you.
                </Trans>
              </Typography>
            </div>
          </div>
          <div className="flex">
            <AutoboneStepper
              variant={state.alonePage ? 'alone' : 'onboarding'}
            ></AutoboneStepper>
          </div>
        </div>
        <div className="w-full pb-4 flex flex-row">
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
              to="/onboarding/body-proportions/manual"
            >
              {t('automaticPropotions.manualCalibration', 'Manual calibration')}
            </Button>
            {!state.alonePage && (
              <Button variant="primary" to="/onboarding/done">
                {t('common:continue', 'Continue')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </AutoboneContextC.Provider>
  );
}
