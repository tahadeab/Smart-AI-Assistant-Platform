/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import DesktopChatInput from './Desktop';
import MobileChatInput from './V1Mobile';

interface ChatInputProps {
  mobile: boolean;
  targetMemberId?: string;
}

const ChatInput = ({ mobile, targetMemberId }: ChatInputProps) => {
  const Input = mobile ? MobileChatInput : DesktopChatInput;

  return <Input targetMemberId={targetMemberId} />;
};

export default ChatInput;
