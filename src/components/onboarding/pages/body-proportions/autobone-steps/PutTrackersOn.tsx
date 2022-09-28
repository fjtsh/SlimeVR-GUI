import { Trans, useTranslation } from 'react-i18next';
import { useTrackers } from '../../../../../hooks/tracker';
import { BodyDisplay } from '../../../../commons/BodyDisplay';
import { BodyInteractions } from '../../../../commons/BodyInteractions';
import { Button } from '../../../../commons/Button';
import { PersonFrontIcon } from '../../../../commons/PersonFrontIcon';
import { TipBox } from '../../../../commons/TipBox';
import { Typography } from '../../../../commons/Typography';

export function PutTrackersOnStep({ nextStep }: { nextStep: () => void }) {
  const { t } = useTranslation('onboarding');
  const { trackers } = useTrackers();

  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-grow flex-col gap-4 max-w-sm">
          <Typography variant="main-title" bold>
            {t('autoboneSteps.putTrackersOn.title', 'Put on your trackers')}
          </Typography>
          <div>
            <Typography color="secondary">
              <Trans
                i18nKey={'onboarding:autoboneSteps.putTrackersOn.procedure'}
              >
                To calibrate your proportions, we're gonna use the <br />
                trackers you just assigned. Put on all your trackers, <br />
                you can see which are which in the figure to the right.
              </Trans>
            </Typography>
          </div>
          <div className="flex">
            <TipBox>
              <Trans i18nKey={'common:tips.shakeTracker'}>
                Not sure which tracker is which? Shake a tracker and it will
                highlight the corresponding item.
              </Trans>
            </TipBox>
          </div>
        </div>

        <div className="flex">
          <Button variant="primary" onClick={nextStep}>
            {t(
              'autoboneSteps.putTrackersOn.gotoNext',
              'I have all my trackers on'
            )}
          </Button>
        </div>
      </div>
      <div className="flex flex-col pt-1 items-center fill-background-50 justify-center px-16">
        <BodyDisplay
          trackers={trackers}
          width={150}
          dotsSize={15}
          variant="dots"
        />
      </div>
    </>
  );
}
