import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAutobone } from '../../../../../hooks/autobone';
import { ProgressBar } from '../../../../commons/ProgressBar';
import { TipBox } from '../../../../commons/TipBox';
import { Typography } from '../../../../commons/Typography';

export function Recording({ nextStep }: { nextStep: () => void }) {
  const { t } = useTranslation('onboarding');
  const { progress, hasCalibration, hasRecording } = useAutobone();

  useEffect(() => {
    if (progress === 1 && hasCalibration) {
      nextStep();
    }
  }, [progress, hasCalibration]);

  return (
    <div className="flex flex-col items-center w-full justify-between">
      <div className="flex gap-1 flex-col justify-center items-center">
        <div className="flex text-status-critical justify-center items-center gap-1">
          <div className="w-2 h-2 rounded-lg bg-status-critical"></div>
          <Typography color="text-status-critical">REC</Typography>
        </div>
        <Typography variant="section-title">
          {t('autoboneSteps.recording.title', 'Recording in progress...')}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.recording.description',
            'Make the moves shown below:'
          )}
        </Typography>
      </div>
      <div>
        <Typography color="secondary">
          {t('autoboneSteps.recording.bendKnee', 'Bend knees a few times.')}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.recording.standUp',
            'Sit on a chair then stand up.'
          )}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.recording.twistUpperBodyLeftThenBendRight',
            'Twist upper body left, then bend right.'
          )}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.recording.twistUpperBodyRightThenBendLeft',
            'Twist upper body right, then bend left.'
          )}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.recording.wiggleAround',
            'Wiggle around until timer ends.'
          )}
        </Typography>
      </div>
      <div className="flex">
        <TipBox>
          {t(
            'autoboneSteps.recording.doNotMoveYourHeels',
            'Ensure your heels do not move during recording!'
          )}
        </TipBox>
      </div>
      <div className="flex flex-col gap-2 items-center w-full max-w-[150px]">
        <ProgressBar progress={progress} height={2}></ProgressBar>
        <Typography color="secondary">
          {!hasCalibration && hasRecording
            ? t(
                'autoboneSteps.recording.processingTheResult',
                'Processing the result'
              )
            : t('autoboneSteps.recording.15SecLeft', '15 seconds left')}
        </Typography>
      </div>
    </div>
  );
}
