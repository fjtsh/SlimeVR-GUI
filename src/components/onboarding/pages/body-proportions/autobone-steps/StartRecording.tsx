import { Trans, useTranslation } from 'react-i18next';
import { useAutobone } from '../../../../../hooks/autobone';
import { Button } from '../../../../commons/Button';
import { TipBox } from '../../../../commons/TipBox';
import { Typography } from '../../../../commons/Typography';

export function StartRecording({
  nextStep,
  prevStep,
  variant,
}: {
  nextStep: () => void;
  prevStep: () => void;
  variant: 'onboarding' | 'alone';
}) {
  const { t } = useTranslation('onboarding');
  const { startRecording } = useAutobone();

  const start = () => {
    nextStep();
    startRecording();
  };

  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-grow flex-col gap-4 max-w-sm">
          <Typography variant="main-title" bold>
            {t('autoboneSteps.startRecording.title', 'Get ready to move')}
          </Typography>
          <div>
            <Typography color="secondary">
              <Trans i18nKey="onboarding:autoboneSteps.startRecording.description">
                We're now going to record some specific poses and <br />
                moves. These will be prompted in the next screen. <br />
                Be ready to start when the button is pressed!
              </Trans>
            </Typography>
          </div>
          <div className="flex">
            <TipBox>
              {t(
                'autoboneSteps.startRecording.doNotMoveYourHeels',
                'Make sure you do not move your heels, they must stay at the same place while recording.'
              )}
            </TipBox>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant={variant === 'onboarding' ? 'secondary' : 'tierciary'}
            onClick={prevStep}
          >
            {t('common:previousStep', 'Previous step')}
          </Button>
          <Button variant="primary" onClick={start}>
            {t('autoboneSteps.startRecording.gotoNext', 'Start Recording')}
          </Button>
        </div>
      </div>
    </>
  );
}
