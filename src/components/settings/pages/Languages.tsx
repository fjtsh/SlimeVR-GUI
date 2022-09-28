import { Radio } from '../../commons/Radio';
import { useForm } from 'react-hook-form';
import { Typography } from '../../commons/Typography';

interface SettingsForm {
  language: string;
}

// FIXME todo implement
export function Languages() {
  const { register, reset, control, watch, handleSubmit } =
    useForm<SettingsForm>({
      defaultValues: {
        language: 'en',
      },
    });

  return (
    <>
      <Typography bold>Language</Typography>
      <div className="flex flex-col">
        <Typography color="secondary">Select your language</Typography>
        <div className="flex md:flex-row flex-col gap-5 pt-2">
          <Radio
            control={control}
            name="{/*FIXME*/}"
            label="English"
            value=""
          ></Radio>
          <Radio
            control={control}
            name="{/*FIXME*/}"
            label="日本語"
            value=""
          ></Radio>
        </div>
      </div>
    </>
  );
}
