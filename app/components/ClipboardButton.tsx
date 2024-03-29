import { Button, ButtonProps } from '@nextui-org/react';
import { DebouncedFunc } from 'lodash';
import debounce from 'lodash/debounce';
import { Copy, CopyCheck } from 'lucide-react';
import React from 'react';

type ClipboardButtonProps = ButtonProps & {
  clipboardText: string;
};

export default function ClipboardButton(props: ClipboardButtonProps) {
  const { clipboardText, ...buttonProps } = props;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [debouncedButtonTextUpdate, setDebouncedButtonTextUpdate] =
    React.useState<DebouncedFunc<() => void>>();

  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsLoading(true);

      if (debouncedButtonTextUpdate) {
        debouncedButtonTextUpdate.cancel();
      }

      const buttonTextUpdate = debounce(() => {
        setIsLoading(false);
      }, 1000);

      buttonTextUpdate();

      setDebouncedButtonTextUpdate(buttonTextUpdate);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Button
      onPress={() => copyContent(clipboardText)}
      className="text-foreground/80 h-unit-7 min-w-unit-7 w-unit-7"
      isLoading={isLoading}
      {...buttonProps}
    />
  );
}

ClipboardButton.defaultProps = {
  children: <Copy className="w-4" />,
  title: 'Copy to clipboard',
  clipboardText: 'Sorry, there was nothing to copy.',
  spinner: <CopyCheck className=" w-4" />,
  isIconOnly: true,
  size: 'sm',
  radius: 'sm',
  variant: 'light',
};
