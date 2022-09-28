import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';
import { Trans, useTranslation } from 'react-i18next';
import { BodyPart } from 'solarxr-protocol';
import { Button } from '../commons/Button';
import { CheckBox } from '../commons/Checkbox';
import { TipBox } from '../commons/TipBox';
import { Typography } from '../commons/Typography';
import { BodyAssignment } from '../onboarding/BodyAssignment';

export function SingleTrackerBodyAssignmentMenu({
  isOpen = true,
  onClose,
  onRoleSelected,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelected: (role: BodyPart) => void;
}) {
  const { control, watch } = useForm<{ advanced: boolean }>({
    defaultValues: { advanced: false },
  });
  const { advanced } = watch();
  const { t } = useTranslation('tracker');

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onClose}
      overlayClassName={classNames(
        'fixed top-0 right-0 left-0 bottom-0 flex flex-col items-center w-full h-full justify-center bg-black bg-opacity-90 z-20'
      )}
      className={classNames(
        'focus:ring-transparent focus:ring-offset-transparent focus:outline-transparent outline-none mt-20 z-10'
      )}
    >
      <div className="flex w-full h-full flex-col gap-10 px-3">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex gap-8">
            <div className="flex flex-col max-w-sm gap-3">
              <Typography variant="main-title" bold>
                {t(
                  'assignSingleTracker.title',
                  'Where do you want this tracker to be?'
                )}
              </Typography>
              <Typography color="secondary">
                {t(
                  'assignSingleTracker.description',
                  'Choose a location where you want this tracker to be assigned. \
                  Alternatively you can choose to manage all trackers at once \
                  instead of one by one.'
                )}
              </Typography>
              <CheckBox
                control={control}
                label={t(
                  'common:showAdvAssignLoc',
                  'Show advanced assign locations'
                )}
                name="advanced"
                variant="toggle"
              ></CheckBox>
              <div className="flex">
                <Button variant="secondary" to="/onboarding/trackers-assign">
                  {t(
                    'assignSingleTracker.gotoTrackerAssign',
                    'Manage all trackers'
                  )}
                </Button>
              </div>
            </div>
            <div className="flex flex-col flex-grow gap-3 rounded-xl fill-background-50">
              <BodyAssignment
                onlyAssigned={false}
                advanced={advanced}
                onRoleSelected={onRoleSelected}
              ></BodyAssignment>
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  onClick={() => onRoleSelected(BodyPart.NONE)}
                >
                  {t('assignSingleTracker.unassignTracker', 'Unassign tracker')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
