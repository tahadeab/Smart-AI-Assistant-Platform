/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { MCP } from '@lobehub/icons';
import { Avatar } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { CSSProperties, memo } from 'react';

interface PluginAvatarProps {
  alt?: string;
  avatar?: string;
  size?: number;
  style?: CSSProperties;
}

const PluginAvatar = memo<PluginAvatarProps>(({ avatar, style, size = 40, alt }) => {
  const theme = useTheme();
  return avatar === 'MCP_AVATAR' ? (
    <MCP.Avatar
      className={`${theme.prefixCls}-avatar`}
      size={size}
      style={{ flex: 'none', overflow: 'hidden', ...style }}
    />
  ) : (
    <Avatar
      alt={alt}
      avatar={avatar}
      size={size}
      style={{ flex: 'none', overflow: 'hidden', ...style }}
    />
  );
});

export default PluginAvatar;
