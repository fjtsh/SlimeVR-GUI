import { Trans, useTranslation } from 'react-i18next';
import { Button } from '../../../../commons/Button';
import { FromtOfChairIcon } from '../../../../commons/icon/FrontOfChair';
import { Typography } from '../../../../commons/Typography';

export function PreparationStep({
  nextStep,
  prevStep,
  variant,
}: {
  nextStep: () => void;
  prevStep: () => void;
  variant: 'onboarding' | 'alone';
}) {
  const { t } = useTranslation('onboarding');

  return (
    <>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-grow flex-col gap-4 max-w-sm">
          <Typography variant="main-title" bold>
            {t('autoboneSteps.preparation.title', 'Preparation')}
          </Typography>
          <div>
            <Typography color="secondary">
              <Trans
                i18nKey={'onboarding:autoboneSteps.preparation.description'}
              >
                Place a chair directly behind you inside your play space. <br />
                Be prepared to sit down during the autobone setup.
              </Trans>
            </Typography>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant={variant === 'onboarding' ? 'secondary' : 'tierciary'}
            onClick={prevStep}
          >
            {t('common:previousStep', 'Previous step')}
          </Button>
          <Button variant="primary" onClick={nextStep}>
            {t(
              'autoboneSteps.preparation.gotoNext',
              'I am in front of a chair'
            )}
          </Button>
        </div>
      </div>
      <div className="flex flex-col pt-1 items-center fill-background-50 justify-center px-12">
        <FromtOfChairIcon width={180} />
      </div>
    </>
  );
}
