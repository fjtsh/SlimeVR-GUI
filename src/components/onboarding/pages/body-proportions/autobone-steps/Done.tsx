import { useTranslation } from 'react-i18next';
import { Typography } from '../../../../commons/Typography';

export function DoneStep() {
  const { t } = useTranslation('onboarding');

  return (
    <div className="flex flex-col items-center w-full justify-center gap-5">
      <div className="flex gap-1 flex-col justify-center items-center">
        <Typography variant="section-title">
          {t('autoboneSteps.done.title', 'Body measured and saved.')}
        </Typography>
        <Typography color="secondary">
          {t(
            'autoboneSteps.done.description',
            'Your body proportions calibration is complete!'
          )}
        </Typography>
      </div>
      {/* <Button variant="primary">Continue to next step</Button> */}
    </div>
  );
}
