import { Text } from '@kuma-ui/core';
import { GeneralReceptionActionButtons } from '../_components/ActionButton';

export const ConfirmCallDestination = async () => {
  return <>
    <Text fontSize="x-large" marginBottom="20px" padding='10px' >
      「総合受付」を呼び出します。<br />よろしいですか？
    </Text>
    <GeneralReceptionActionButtons />
  </>;
}

export default ConfirmCallDestination;