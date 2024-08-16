import { Text } from '@kuma-ui/core';
import { RecruitmentInterviewActionButtons } from '../_components/ActionButton';

const ConfirmCallDestination =  () => {
  return   <>
    <Text fontSize="x-large" marginBottom="20px" padding='10px' >
      「hitocolor採用面接」を呼び出します。<br />よろしいですか？
    </Text>
    <RecruitmentInterviewActionButtons />
</>;
}

export default ConfirmCallDestination;